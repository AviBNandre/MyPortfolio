import Message from '../models/Message.js';

export const submitContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All required fields must be provided.' });
    }

    const newMessage = await Message.create({
      name,
      email,
      subject: subject || 'General Opportunity',
      message
    });

    return res.status(201).json({
      success: true,
      message: 'Message delivered successfully.',
      data: newMessage
    });
  } catch (error) {
    console.error('Contact Form Controller Error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error processing contact message.' });
  }
};

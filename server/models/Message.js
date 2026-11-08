import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, default: 'General Inquiry' },
    message: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model('Message', messageSchema);

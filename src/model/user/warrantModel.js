import mongoose from 'mongoose';

// Define schema
const warrantSchema = new mongoose.Schema({
    warrantNo: {
        type: String, // Ensure this is String
        required: [true, 'Warrant number is required']
    },
    warrantType: {
        type: String,
        required: [true, 'Warrant type is required']
    },
    accusedName: {
        type: String,
        required: [true, 'Accused name is required']
    },
    aadharNo: {
        type: Number, // Ensure this is String
        required: [true, 'Aadhar number is required']
    },
    details: {
        type: String,
        required: [true, 'Details are required']
    },
    pincode: {
        type: String, // Ensure this is String
        required: [true, 'Pincode is required']
    },
    policeStationId: {
        type: String, // Ensure this is String
        required: [true, 'Police station ID is required']
    },
    status: {
        type: String,
        default: 'Pending'
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    }
});


const firSchema = new mongoose.Schema({
    firNo: { type: String, required: true },
    accusedName: { type: String, required: true },
    aadharNo: { type: Number, required: true },
    details: { type: String, required: true },
    pincode: { type: Number, required: true },
    policeStationId: { type: mongoose.Schema.Types.ObjectId, ref: 'PoliceStation', required: true },
    status: { type: String, default: 'Pending' },
    address: { type: String, required: true }
});


// Use a dynamic model name to avoid recompilation issues

export const Warrant = mongoose.models.Warrant || mongoose.model('Warrant', warrantSchema);
export const FIR=mongoose.models.FIR || mongoose.model('FIR', firSchema);


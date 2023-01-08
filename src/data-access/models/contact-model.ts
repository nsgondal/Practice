import * as mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  contactId: {
    type: String,
    required: true,
  },
  contactStatus: {
    type: String,
    required: true,
  },
  contactName: {
    type: Number,
    required: true,
  },
  contactGround: {
    type: String,
    required: true,
  },
  contactSatellite: {
    type: String,
    required: true,
  },
  contactEquipment: {
    type: String,
    required: true,
  },
  contactState: {
    type: String,
    required: true,
  },
  contactStep: {
    type: String,
    required: true,
  },
  contactDetail: {
    type: String,
    required: true,
  },
  contactBeginTimestamp: {
    type: Number,
    required: true,
  },
  contactEndTimestamp: {
    type: Number,
    required: true,
  },
  contactLatitude: {
    type: Number,
    required: true,
  },
  contactLongitude: {
    type: Number,
    required: true,
  },
  contactAzimuth: {
    type: Number,
    required: true,
  },
  contactElevation: {
    type: Number,
    required: true,
  },
  contactResolution: {
    type: String,
    required: true,
  },
  contactResolutionStatus: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model<IContact>('Contact', contactSchema);

interface IContact extends mongoose.Document {
  contactId: string;
  contactStatus: string;
  contactName: number;
  contactGround: string;
  contactSatellite: string;
  contactEquipment: string;
  contactState: string;
  contactStep: string;
  contactDetail: string;
  contactBeginTimestamp: number;
  contactEndTimestamp: number;
  contactLatitude: number;
  contactLongitude: number;
  contactAzimuth: number;
  contactElevation: number;
  contactResolution: string;
  contactResolutionStatus: string;
}

export { Contact, IContact };

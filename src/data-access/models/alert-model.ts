
import * as mongoose from 'mongoose';

const alertSchema = new mongoose.Schema({
  errorId: {
    type: String,
    required: true 
  },
  errorSeverity: {
    type: String,
    required: true 
  },
  errorCategory: {
    type: String,
    required: true
  },
  errorMessage: {
    type: String,
    required: true
  },
  longMessage: {
    type: String,
    required: true
  },
  errorTime: {
    type: Date,
    required: true
  },
  selected: {
    type: Boolean,
    required: true
  },
  new: {
    type: Boolean,
    required: true
  },
  expanded:{
    type: Boolean,
    required: true
  }
});

const Alert = mongoose.model<IAlert>('Alert', alertSchema);

interface IAlert extends mongoose.Document {
  errorId:  string;
  errorSeverity:  String;
  errorCategory:String;
  errorMessage : String;
  longMessage: String;
  errorTime:  Date;
  selected:  Boolean;
  new:  Boolean;
  expanded: Boolean;
}

export { Alert, IAlert };

import {Template} from'meteor/templating';
import db from '../imports/db';
Template.list.helpers(
    {
        listing: db.find(),
    }
)
Template.list.events(
    {
        'click .remove'(){
            db.remove(this._id)
            return false;
        },
        'click .modif'(e,template){
                db.update(this._id, {
                $set: { checked: !this.checked },
                });
            return  false;
        },
        'click .validate'(e,template){
            db.update(this._id, 
                {
                    $set: 
                    { 
                        checked: !this.checked,
                        username: template.find('.user-update').value
                    }
                }
            );
            return  false; 
        }
    }
)

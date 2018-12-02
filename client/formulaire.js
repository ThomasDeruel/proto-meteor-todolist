import {Template} from "meteor/templating";
import db from '../imports/db';
Template.formulaire.events(
    {
        'click button'(event,template){
            if(template.find('input').value !== ''){
                db.insert
                (
                    {
                        username:template.find('input').value
                    }
                )
            }
        }
    }
)
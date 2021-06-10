/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 12-25-2020
 * @last modified by  : Amit Singh
 * Modifications Log 
 * Ver   Date         Author       Modification
 * 1.0   12-25-2020   Amit Singh   Initial Version
**/
import { LightningElement } from 'lwc';
import hasViewSetup from '@salesforce/userPermission/ViewSetup';
import hasEmailSingle from '@salesforce/userPermission/EmailSingle';
import hasViewAllData from '@salesforce/userPermission/ViewAllData';
import hasModifyAllData from '@salesforce/userPermission/ModifyAllData';
import hasAuthorApex from '@salesforce/userPermission/AuthorApex';
import hasSend_Message from '@salesforce/customPermission/Send_Message';

import template1 from './template1.html';
import template2 from './template-2.html';
import customPermissions from './customPermissions.html';
export default class CustomPermissions extends LightningElement {

    templateOne = true;

    get disaleViewSetup(){
        return hasViewSetup;
    }

    get disaleEmailButton(){
        return hasEmailSingle;
    
    }
    get viewAll(){
        return hasViewAllData;
    }
    get ModifyAll(){
        return hasModifyAllData;
    }
    get hasSendMessage(){
        return hasSend_Message;
    }

    get canDevelopApex(){
        return hasAuthorApex;
    }

    render(){
        return this.templateOne ? customPermissions : template2;
    }

    changeTemplate(){
        this.templateOne = this.templateOne === true ? false : true; 
    }
}

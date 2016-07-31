import {Component} from "@angular/core";
import dialogs = require("ui/dialogs");

@Component({
    selector: "my-app",
    templateUrl: "app.component.xml"
})
export class AppComponent {
  operation: string = '';
  result: string= '';

  append(element: string){
    this.operation += element;
  }

  undo(){
    if (this.operation != ''){
      this.operation = this.operation.slice(0, -1)
    }
  }

  clear(){
    this.operation = '';
  }
  
  evaluate(){
    try {
      this.result = eval(this.operation);
    }
    catch(e){
      dialogs.alert({title: 'Error', message: 'Cannot evaluate expression!', okButtonText: 'OK'});
    }
  }
}

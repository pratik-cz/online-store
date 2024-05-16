import { Component } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
loader!:boolean;
constructor(private loaderService:LoaderService){
  this.loaderService.loader.subscribe(res=>{
    this.loader=res
  })
}
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/Rx';
import { CommonServiceService } from '../../common/service/common-service.service';
import { RestUrlService } from '../../common/service/rest-url.service';
import { Http } from '@angular/http';
import { ModalComponent } from '../../common/component/modal/modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-door-door',
  templateUrl: './door-door.component.html',
  styleUrls: ['./door-door.component.css']
})
export class DoorDoorComponent implements OnInit {
  deliveryLocation: any;
  pickupLocation: any;
  d2dDeliveryPort: any;
  d2dPickupPort: any;
  pickupLocationList: any;
  obj_name: any;
  pickupPortList: any;
  deliveryPortList: any;
  pickupSwitchStatus: boolean = false;
  deliverySwitchStatus: boolean = true;
  isPickupCountrySelected: boolean = true;
  isDeliveryCountrySelected: boolean = true;
  selectedPickupCountry: any = 'CN';
  selectedDeliveryCountry: any = 'US';
  pickupCountryList: any[];
  deliveryCountryList: any[];
  hasdoor : string ='N';
  d2dLoadType:string;
  pieceField:string;
  loadTypeList: any[];
  pickupparams:string;
  deliveryparams:string;
  pickupdate:any;
  dimensionsField:any;
  weight:any;
  volume:any;
  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private http: Http, private commonServiceService: CommonServiceService, private restUrlService:RestUrlService) {
      }

  ngOnInit() {
   // this.child.openModal();
   // this.pickupSwitchStatus=true;
   // this.deliverySwitchStatus=false;    
    //this.commonServiceService.getAllCountries().subscribe(pickupCountryList => this.pickupCountryList = pickupCountryList.json());
    //this.commonServiceService.getAllCountries().subscribe(deliveryCountryList => this.deliveryCountryList = deliveryCountryList.json());
    this.loadPickupCountryList();
    this.loadDeliveryCountryList();
    if(this.selectedPickupCountry != null){
      this.isPickupCountrySelected=false;
    }

    if(this.selectedDeliveryCountry != null){
      this.isDeliveryCountrySelected=false;
    }

    this.loadTypeList=[ {
      "name" : "BOX",
      "value" : "BOX"
    }, {
      "name" : "CRATE",
      "value" : "CRATE"
    },{
      "name" : "PALLET",
      "value" : "PALLET"
    }]

  }
  
  loadPickupCountryList = function(){
    if(this.pickupSwitchStatus){
      this.hasdoor='Y';
    }
    const param = {hasDoor:  this.hasdoor, transportMode: 'SE'};
    this.http.post(this.restUrlService.getRestUrl().getD2DCountries.url, param).subscribe(
      response => {
        this.pickupCountryAllList = response.json();          
        this.changePickupCountryList();      
        for (const {item, index} of this.pickupCountryAllList.map((item, index) => ({ item, index }))) {
          if(item.value == 'CN'){
            this.selectedPickupCountry=this.pickupCountryAllList[index];
            if (!this.pickupSwitchStatus ) {	// Pickup from `port` 
						this.loadPickupPortList(this.selectedPickupCountry.hdrId);
						}
          }
          this.pickupparams = {countryCode:this.selectedPickupCountry.value, userId:''};
        }
      }, error => {
    }
     // pickupCountryList => this.pickupCountryList = pickupCountryList.json()
    );
  }

  loadPickupPortList = function(hdrId){
    const param = {hdrId: hdrId, transportMode: 'SE'};
    return this.http.post(this.restUrlService.getRestUrl().getD2DPorts.url, param).subscribe(pickupPortList => this.pickupPortList = pickupPortList.json());
  }

  changePickupCountryList = function(){
    if(this.pickupSwitchStatus){
      this.hasdoor='Y';
    }else{
      this.hasdoor='N';
    }
    if(this.pickupCountryList ! = null ){
      if(this.pickupCountryList.length>0){
      for (var i = this.pickupCountryList.length - 1; i >= 0; i -= 1) { 
        this.pickupCountryList.splice(i, 1);  
       } 
      }
    }
    this.pickupCountryList =[];
    for (var i =0;i< this.pickupCountryAllList.length; i++) { 
      if(this.hasdoor=='Y' && this.pickupCountryAllList[i].hasDoor=='Y'){
        this.pickupCountryList.push(this.pickupCountryAllList[i]);
      }else if(this.hasdoor=='N'){
        this.pickupCountryList.push(this.pickupCountryAllList[i]);            
      }
    }
  }

  checkPickupStatus($event){    
    this.pickupSwitchStatus = $event
    if(this.pickupSwitchStatus){
      this.pickupSwitchStatus=false;
    }else{
      this.pickupSwitchStatus=true;
    }
    this.changePickupCountryList();
    if(!this.pickupSwitchStatus){
      this.deliverySwitchStatus=true;
    }
  }

  loadPickupLocation(){
    const param = {countryCode:this.selectedPickupCountry.value, search:'', userId:''};
    return this.http.post(this.restUrlService.getRestUrl().getLocation.url, param).subscribe(pickupLocationList => this.pickupLocationList = pickupLocationList.json());
  }


  loadDeliveryCountryList = function(){
    if(this.deliverySwitchStatus){
      this.hasdoor='Y';
    }
    const param = {hasDoor:  this.hasdoor, transportMode: 'SI'};
    this.http.post(this.restUrlService.getRestUrl().getD2DCountries.url, param).subscribe(
      response => {
        this.deliveryCountryAllList = response.json();
        this.changeDeliveryCountryList();
        for (const {item, index} of this.deliveryCountryList.map((item, index) => ({ item, index }))) {
          if(item.value == 'US'){
            this.selectedDeliveryCountry=this.deliveryCountryList[index];
          //  if (!this.deliverySwitchStatus ) {	// Pickup from `port` 
						this.loadDeliveryPortList(this.selectedDeliveryCountry.hdrId);
				//		}
          }
          this.deliveryparams = {countryCode:this.selectedDeliveryCountry.value, userId:''};
        }
      }, error => {
    }
  );
    //  deliveryCountryList => this.deliveryCountryList = deliveryCountryList.json());
  }

  changeDeliveryCountryList = function(){
    if(this.deliverySwitchStatus){
      this.hasdoor='Y';
    }else{
      this.hasdoor='N';
    }
    if(this.deliveryCountryList ! = null ){
      if(this.deliveryCountryList.length>0){
      for (var i = this.deliveryCountryList.length - 1; i >= 0; i -= 1) { 
        this.deliveryCountryList.splice(i, 1);  
       } 
      }
    }
    this.deliveryCountryList =[];
    for (var i =0;i< this.deliveryCountryAllList.length; i++) { 
      if(this.hasdoor=='Y' && this.deliveryCountryAllList[i].hasDoor=='Y'){
        this.deliveryCountryList.push(this.deliveryCountryAllList[i]);
      }else if(this.hasdoor=='N'){
        this.deliveryCountryList.push(this.deliveryCountryAllList[i]);            
      }
    }
  }

  loadDeliveryPortList = function(hdrId){
    const param = {hdrId: hdrId, transportMode: 'SI'};
    return this.http.post(this.restUrlService.getRestUrl().getD2DPorts.url, param).subscribe(deliveryPortList => this.deliveryPortList = deliveryPortList.json());
  }

  checkDeliveryStatus($event){
    this.deliverySwitchStatus = $event
    if(this.deliverySwitchStatus){
      this.deliverySwitchStatus=false;
    }else{
      this.deliverySwitchStatus=true;
    }
    this.changeDeliveryCountryList();
    if(!this.deliverySwitchStatus){
      this.pickupSwitchStatus=true;
    }
  }

  showPickupDropoff= function(){
    if(this.pickupSwitchStatus){
      return 'DOOR.PICKUP_DATE';
    }else{
      return 'DOOR.DROPOFF_DATE';
    }
  }

  updateModelChange($event,obj){
    if(obj == 'selectedPickupCountry'){
    this.selectedPickupCountry=$event;
    this.loadPickupPortList(this.selectedPickupCountry.hdrId);
    if($event != null){
      this.isPickupCountrySelected=false;
    }
    }else if(obj == 'selectedDeliveryCountry'){
      this.selectedDeliveryCountry=$event;
      this.loadDeliveryPortList(this.selectedDeliveryCountry.hdrId);
      if($event != null){
        this.isDeliveryCountrySelected=false;
      }
    }else if(obj == 'd2dPickupPort'){
      this.d2dPickupPort=$event;
    }else if(obj == 'd2dDeliveryPort'){
      this.d2dDeliveryPort=$event;
    }else if(obj == 'pickupLocation'){
      this.pickupLocation=$event;
    }else if(obj == 'deliveryLocation'){
      this.deliveryLocation=$event;
    }
  }

  validate(){
    if(this.selectedPickupCountry.value != null && this.selectedDeliveryCountry.value != null && ((this.pickupSwitchStatus == true && this.pickupLocation != null) || (this.pickupSwitchStatus == false && this.d2dPickupPort != null)) && ((this.deliverySwitchStatus == true && this.deliveryLocation != null) || (this.deliverySwitchStatus == false && this.d2dDeliveryPort != null))){
      return false;
    }else{
       return true;
    }
  }

 
  url = this.restUrlService.getRestUrl().getLocation.url;
  api = 'http';
  query = '';
  listcount='10';

  openConfirmDialog(){
    this.modalRef = this.modalService.show(ModalComponent);
        this.modalRef.content.onClose.subscribe(result => {
            console.log('results', result);
        })
  }
}

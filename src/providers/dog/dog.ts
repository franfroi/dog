import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DogProvider {
  public apiRoot: string = 'https://dog.ceo/';
  public allDogs:string='api/breeds/list/all';
  public subDogs:string='api/breed/';
  public imgDogs:string='api/breed/';
  public results: any;
  public resultsSubrace: any;
  public resultfoto: any;
  public resultfotosubrace: any;
  
  
  
  constructor(public http: HttpClient) {}

  getAllDogs() {


    let promise = new Promise((resolve, reject) => {
      this.http.get(this.apiRoot + this.allDogs)
      .toPromise()
      .then(
        res => { // Success
          this.results = res['message'];
          console.log(this.results);
          resolve();
        },
        msg => { // Error
          reject(msg);
        }
      );
    
  });
  return promise;
}

getSubDogs(name) {
  
  console.log(this.apiRoot + this.subDogs + name +'/list');
      let promise = new Promise((resolve, reject) => {
        this.http.get(this.apiRoot + this.subDogs + name +'/list')
        .toPromise()
        .then(
          res => { // Success
            this.resultsSubrace = res['message'];
           // console.log(this.resultsSubrace);
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
      
    });
    return promise;
  }

  getFoto(name) 
  {
    
    
        let promise = new Promise((resolve, reject) => {
          this.http.get(this.apiRoot + this.imgDogs + name +'/images')
          .toPromise()
          .then(
            res => { // Success
              this.resultfoto = res['message'];
              //console.log(this.resultfoto);
              resolve();
            },
            msg => { // Error
              reject(msg);
            }
          );
        
      });
      return promise;
    }
  getFotosubrace(name,subname)
 {
    
    
        let promise = new Promise((resolve, reject) => {
          this.http.get(this.apiRoot + this.imgDogs + name +'/'+subname+'/images')
          .toPromise()
          .then(
            res => { // Success
              this.resultfotosubrace = res['message'];
             // console.log(this.resultfotosubrace);
              resolve();
            },
            msg => { // Error
              reject(msg);
            }
          );
        
      });
      return promise;
    }
  
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-regisplayer',
  templateUrl: './regisplayer.component.html',
  styleUrls: ['./regisplayer.component.css']
})
export class RegisplayerComponent implements OnInit {
  isloading:boolean=false;
  formregis=new FormGroup({
    noanggota: new FormControl(''),
    nohp: new FormControl(''),
    cabangolahraga: new FormControl(''),
    nisn: new FormControl(''),
    kebangsaan: new FormControl(''),
    tb: new FormControl(''),
    nama: new FormControl(''),
    bb: new FormControl(''),
    ttl: new FormControl(''),
    namateam: new FormControl(''),
    nik: new FormControl(''),
    nomorpunggung: new FormControl(''),
    alamat: new FormControl(''),
    posisi: new FormControl(''),
  });
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private http: HttpClient,
  ) { }
    datateam:any=[];
  ngOnInit(): void {
    this.isloading=true;
    this.http.get('https://hercules.aturtoko.id/dct/public/datateam').subscribe((res:any)=>
          { console.log(res);
           this.datateam=res.data.data
            console.log(this.datateam)
            this.isloading=false;
          })
  }
  onSubmit(){
    this.isloading=true;
    const data={
      dct_registered_number:this.formregis.get('noanggota')?.value,
      phone_number:this.formregis.get('nohp')?.value,
      sports:this.formregis.get('cabangolahraga')?.value,
      student_registered_number:this.formregis.get('nisn')?.value,
      nationality:this.formregis.get('kebangsaan')?.value,
      height:this.formregis.get('tb')?.value,
      full_name:this.formregis.get('nama')?.value,
      weight:this.formregis.get('bb')?.value,
      place_and_date_of_birth:this.formregis.get('ttl')?.value,
      team_id:this.formregis.get('namateam')?.value,
      id_number:this.formregis.get('nik')?.value,
      back_number:this.formregis.get('nomorpunggung')?.value,
      address:this.formregis.get('alamat')?.value,
      position:this.formregis.get('posisi')?.value,
    }
    console.warn(data)
    if(confirm("Is the data correct?"+" (this data cannot be changed after inputted)")){
      this.http.post('https://hercules.aturtoko.id/dct/public/regisplayer', data).subscribe((res:any)=>
          { console.log(res);
            if(res.success){
              this.isloading=false;
              alert("Success input data");
              this.router.navigate(['/doneregis']);
            }else{
              this.isloading=false;
              alert("Error: "+res.message+"\nContact Admin");
            }
          },(err:any)=>{
            this.isloading=false;
            console.error(err);
          })
    }else{
      this.isloading=false;
      alert("Make sure your data is correct")
    }
    
  }
}

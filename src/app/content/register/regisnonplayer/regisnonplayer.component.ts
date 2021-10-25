import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-regisnonplayer',
  templateUrl: './regisnonplayer.component.html',
  styleUrls: ['./regisnonplayer.component.css']
})
export class RegisnonplayerComponent implements OnInit {
  formregis=new FormGroup({
    noanggota: new FormControl(''),
    kebangsaan: new FormControl(''),
    nama: new FormControl(''),
    nik: new FormControl(''),
    nohp: new FormControl(''),
    alamat: new FormControl(''),
    posisi: new FormControl(''),
  });
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    const data={
      dct_registered_number:this.formregis.get('noanggota')?.value,
      nationality:this.formregis.get('kebangsaan')?.value,
      full_name:this.formregis.get('nama')?.value,
      id_number:this.formregis.get('nik')?.value,
      phone_number:this.formregis.get('nohp')?.value,
      address:this.formregis.get('alamat')?.value,
      position:this.formregis.get('posisi')?.value,
    }
    console.warn(data)
    if(confirm("Is the data correct?"+" (this data cannot be changed after inputted)")){
      this.http.post('https://hercules.aturtoko.id/dct/public/regisnonplayer', data).subscribe((res:any)=>
          { console.log(res);
            if(res.success){
              alert("Success input data");
              this.router.navigate(['/doneregis']);
            }else{
              alert("Error: "+res.message+"\nContact Admin");
            }
          },(err:any)=>{
            console.error(err);
          })
    }else{
      alert("Make sure your data is correct")
    }
  }

}

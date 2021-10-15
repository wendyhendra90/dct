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
      noanggota:this.formregis.get('noanggota')?.value,
      kebangsaan:this.formregis.get('kebangsaan')?.value,
      nama:this.formregis.get('nama')?.value,
      nik:this.formregis.get('nik')?.value,
      nohp:this.formregis.get('nohp')?.value,
      alamat:this.formregis.get('alamat')?.value,
      posisi:this.formregis.get('posisi')?.value,
    }
    console.warn(data)
    if(confirm("Apakah data sudah benar?")){
      alert("Data berhasil")
      this.router.navigate(['/doneregis']);
    }else{
      alert("Silahkan perbaiki datanya")
    }
  }

}

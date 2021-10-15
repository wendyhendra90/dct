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

  ngOnInit(): void {
  }
  onSubmit(){
    const data={
      noanggota:this.formregis.get('noanggota')?.value,
      nohp:this.formregis.get('nohp')?.value,
      cabangolahraga:this.formregis.get('cabangolahraga')?.value,
      nisn:this.formregis.get('nisn')?.value,
      kebangsaan:this.formregis.get('kebangsaan')?.value,
      tb:this.formregis.get('tb')?.value,
      nama:this.formregis.get('nama')?.value,
      bb:this.formregis.get('bb')?.value,
      ttl:this.formregis.get('ttl')?.value,
      namateam:this.formregis.get('namateam')?.value,
      nik:this.formregis.get('nik')?.value,
      nomorpunggung:this.formregis.get('nomorpunggung')?.value,
      alamat:this.formregis.get('alamat')?.value,
      posisi:this.formregis.get('posisi')?.value,
    }
    console.warn(data)
    if(confirm("Apakah data sudah benar?")){
      alert("Data berhasil");
      this.router.navigate(['/doneregis']);
    }else{
      alert("Silahkan perbaiki datanya")
    }
    
  }
}

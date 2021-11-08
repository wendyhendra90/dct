import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-registeam',
  templateUrl: './registeam.component.html',
  styleUrls: ['./registeam.component.css']
})
export class RegisteamComponent implements OnInit {
  formregis=this.fb.group({
    team_classification: new FormControl(''),
    team_name: new FormControl(''),
    team_birth_category: new FormControl(''),
    files:['',
    [Validators.required, 
      RxwebValidators.extension({extensions:["zip"]})]]
  });
  images: any ;
  extension:any=null;
  onFileChange(event:any) {
    console.log(event)
    this.extension = event.path[0].files[0].name.split('.').pop();
    console.log(this.extension)
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formregis.get('files')?.setValue(file);
    }
    console.log(this.formregis.get('files')?.value)
  }
    //const reader = new FileReader();
    // if(event.target.files && event.target.files.length) {
    //   const [file] = event.target.files;
    //   reader.readAsDataURL(file);
    //   reader.onload = () => {
    //     this.photo = reader.result as string;
    //     this.formregis.patchValue({
    //       files: reader.result
    //     });
    //   };
    // }

    // reader.onload = (event: any) => {
    //   this.images.push(event.target.result);

    //   this.formregis.patchValue({
    //     files: this.images
    //   });
    // }
    // reader.readAsDataURL(event.target.files);

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private http: HttpClient,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

  }
  onSubmit(){
    const formData = new FormData();
    formData.append('team_classification', this.formregis.get('team_classification')?.value)
    formData.append('team_name', this.formregis.get('team_name')?.value)
    formData.append('team_birth_category', this.formregis.get('team_birth_category')?.value)
    formData.append('files', this.formregis.get('files')?.value)
    

    if(confirm("Is the data correct?"+" (this data cannot be changed after inputted)")){
      this.http.post('https://hercules.aturtoko.id/dct/public/registeam', formData).subscribe((res:any)=>
          { console.log(res);
            if(res.success){
              alert("Success input data");
              this.router.navigate(['/doneregis']);
            }else{
              alert("Error: "+res.message+"\nContact Admin");
            }
          },(err:any)=>{
            alert("Error: "+err.status+"\nContact Admin");
            console.error(err);
          })
    }else{
      alert("Make sure your data is correct")
    }
  }
}



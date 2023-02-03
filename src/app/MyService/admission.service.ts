import { Injectable } from '@angular/core';
import { Admission } from '../MyModel/admission.model';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  constructor(private httpClient: HttpClient) { }
  private url = "http://localhost:3000/trainees";

  saveTrainee(data : Admission){
    return this.http.post<Admission>(this.url, data);
  }

  getTrainee() {
    return this.http.get<Admission[]>(this.url);
  }

  deleteTrainee(id:number) {
    return this.http.delete<Admission>(this.url+"/"+id);
  }

  getTraineeById(id:number) {
    return this.http.get<Admission>(this.url+"/"+id);
  }

  updateTrainee(trainee:Admission) {
    return this.http.put(this.url+"/"+trainee.id, trainee);
  }
}

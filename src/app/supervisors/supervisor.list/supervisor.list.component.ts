import { Component, OnInit } from '@angular/core';
import { SupervisorModel } from '../../model/supervisor';
import { MatDialog } from '@angular/material/dialog';
import { AddEditSupervisorComponent } from '../add.edit.supervisor/add.edit.supervisor.component';
import { RequestService } from '../../services/requestService';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-supervisor.list',
  standalone: true,
  imports: [],
  templateUrl: './supervisor.list.component.html',
  styleUrl: './supervisor.list.component.scss'
})
export class SupervisorListComponent implements OnInit {
  supervisors: any[] = [];
  constructor(public dialog: MatDialog,
    private requestService: RequestService) { }

  ngOnInit(): void {
    this.getAllSupervisor()
  }

  getAllSupervisor() {
    this.requestService.getAllSupervisor().subscribe(res => {
      if (res) {
        this.supervisors = res.data
      }
    })
  }
  addEditSupervisor(value?: any) {
    const dialogRef = this.dialog.open(AddEditSupervisorComponent, {
      disableClose: true,
      data: value
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === "save"){
        this.getAllSupervisor();
      }
    });
  }

  deleteSupervisor(id: any) {
    this.requestService.removeSupervisorById(id).subscribe(res =>{
      if(res){
        this.getAllSupervisor();
      }
    })
  }

  deleteConfirmation(id:any){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('result: ', result);
      if(result === "yes"){
        this.deleteSupervisor(id)
      }
    });
  }
}

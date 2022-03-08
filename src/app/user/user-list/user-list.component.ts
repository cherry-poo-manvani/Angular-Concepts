import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { User } from '../Model/user.model';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  usersListData: User[] = [];
  Searchname: string = '';

  departments: any;
  constructor(private userServiceService: UserServiceService, private overlay: Overlay) { }

  ngOnInit(): void {
    this.getUser();
    this.getDepartment();
  }

  getUser() {
    this.userServiceService.getUser().subscribe((res: User[]) => {
      this.usersListData = res;

    })
  }

  deleteUser(id: number) {
    this.userServiceService.deleteUser(id).subscribe(() => {
      this.getUser();
    })
  }
  getDepartment() {
    this.userServiceService.getDepratmnet().subscribe((res: any) => {
      this.departments = res;
    })
  }

  openform(id?: number) {
    let config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().centerHorizontally().right();

    const overlayRef = this.overlay.create(config);

    const component = new ComponentPortal(UserFormComponent);
    const componentRef = overlayRef.attach(component);

    componentRef.instance.id = id;

    componentRef.instance.cancel.subscribe(() => {
      overlayRef.detach();
      this.getUser();
    });
  }

  openPopup(id: number) {
    let config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();

    const overlayRef = this.overlay.create(config);

    const component = new ComponentPortal(ConfirmationPopupComponent);
    const componentRef = overlayRef.attach(component);

    componentRef.instance.id = id;

    componentRef.instance.buttonClickEvent.subscribe((name) => {
      if (name === 'yes') {
        this.deleteUser(id);
      }
      overlayRef.detach();
    });
  }
}

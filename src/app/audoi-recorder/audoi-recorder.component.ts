import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

declare var $: any;
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-audoi-recorder',
  templateUrl: './audoi-recorder.component.html',
  styleUrls: ['./audoi-recorder.component.scss']
})
export class AudoiRecorderComponent implements OnInit {
  title = 'micRecorder';
  record: any;
  error: any;
  url: any;
  recording = false;
  closeResult: string = '';
  constructor(private domSanitizer: DomSanitizer, private modalService: NgbModal) { }

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } 
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  public customToolbar: Object = {
    items: ['Bold', 'Italic', 'Undo', 'Redo', 'CreateTable', 'Image', 'Underline', 'Formats', 'Alignments']
  }

  ngOnInit(): void {
  }

}

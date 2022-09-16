import { Component, OnInit } from '@angular/core';

declare var $: any;
// import * as RecordRTC from 'recordrtc';
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
  constructor(private domSanitizer: DomSanitizer) { }

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  // initiateRecording() {
  //   this.recording = true;
  //   let mediaConstraints = {
  //   video: false,
  //   audio: true
  //   }
  //   navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
  // }

  // successCallback(stream: any) {
  //   var options = {
  //   mimeType: "audio/wav",
  //   numberOfAudioChannels: 1,
  //   sampleRate: 16000,
  //   };
  //   var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
  //   this.record = new StereoAudioRecorder(stream, options);
  //   this.record.record();
  // }

  // stopRecording() {
  //   this.recording = false;
  //   this.record.stop(this.processRecording.bind(this));
  // }

  // processRecording(blob: any) {
  //   this.url = URL.createObjectURL(blob);
  //   console.log("blob", blob);
  //   console.log("url", this.url);
  // }

  // errorCallback(error: any) {
  //   this.error = 'Can not play audio in your browser';
  // }

  ngOnInit(): void {
  }

}

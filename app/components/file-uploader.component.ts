import {Component} from '@angular/core';
declare var swal:any;

@Component({
    selector: 'file-uploader',
    templateUrl: 'app/views/file-uploader.html',
    styleUrls: ['app/assets/styles/file-uploader.css'],
    inputs:['activeColor','baseColor','overlayColor']
})
export class FileUploaderComponent {

    activeColor: string = 'green';
    baseColor: string = '#ccc';
    overlayColor: string = 'rgba(255,255,255,0.5)';

    dragging: boolean = false;
    loaded: boolean = false;
    imageLoaded: boolean = false;
    imageSrc: string = '';

    handleDragEnter() {
        this.dragging = true;
    }

    handleDragLeave() {
        this.dragging = false;
    }

    handleDrop(e) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    }

    handleImageLoad() {
        this.imageLoaded = true;
        // this.iconColor = this.overlayColor;
    }

    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        var pattern = /image-*/;
        var reader = new FileReader();

        if (!file.type.match(pattern)) {
            swal({
                text: "Неверный формат файла",
                type: "error",
                confirmButtonText: "закрыть"
            });
            return;
        }
        if(file.size > 120000){
            swal({
                text: "Размер фотографии слишком большой",
                type: "error",
                confirmButtonText: "закрыть"
            });
            return;
        }

        this.loaded = false;

        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }

    _handleReaderLoaded(e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    }

    _setActive() {
        // this.borderColor = this.activeColor;
        if (this.imageSrc.length === 0) {
            // this.iconColor = this.activeColor;
        }
    }

    _setInactive() {
        // this.borderColor = this.baseColor;
        if (this.imageSrc.length === 0) {
            // this.iconColor = this.baseColor;
        }
    }

}
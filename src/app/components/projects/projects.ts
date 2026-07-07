import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
   /** Carrusel del Proyecto 1 */
  projectImages: string[] = [
    'assets/images/inicioCuidaBot.png',
    'assets/images/configuracionCuidaBot.png',
  ];

  /** Carrusel del Proyecto 2 */
  projectImages1: string[] = [
    'assets/images/ir1.png',
    'assets/images/ir22.png'
  ];

  /** Carrusel del Proyecto 3 */
  projectImages2: string[] = [
    'assets/images/ch1.png',
    'assets/images/ch2.png'
  ];

   /** Carrusel del Proyecto 4 */
  projectImages3: string[] = [
    'assets/images/pbiv1.png',
    'assets/images/pbiv2.png'
  ];

/** Carrusel del Proyecto 5 */
  projectImages4: string[] = [
    'assets/images/m_5.png',
    'assets/images/n_1.png',
    'assets/images/n2.png',
    'assets/images/k_5.png',
    'assets/images/g_1.png',
    'assets/images/d_b_5.png'
  ];

  /** Índices actuales de cada carrusel */
  currentIndex: number = 0;
  currentIndex1: number = 0;
  currentIndex2: number = 0;
  currentIndex3: number = 0;
  currentIndex4: number = 0;
  /** Navega hacia la imagen anterior del Proyecto 1 */
  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.projectImages.length) % this.projectImages.length;
  }

  /** Navega hacia la imagen siguiente del Proyecto 1 */
  nextImage() {
    this.currentIndex =
      (this.currentIndex + 1) % this.projectImages.length;
  }

  /** Navega hacia la imagen anterior del Proyecto 2 */
  prevImage1() {
    this.currentIndex1 =
      (this.currentIndex1 - 1 + this.projectImages1.length) % this.projectImages1.length;
  }

  /** Navega hacia la imagen siguiente del Proyecto 2 */
  nextImage1() {
    this.currentIndex1 =
      (this.currentIndex1 + 1) % this.projectImages1.length;
  }

  /** Navega hacia la imagen anterior del Proyecto 3 */
  prevImage2() {
    this.currentIndex2 =
      (this.currentIndex2 - 1 + this.projectImages2.length) % this.projectImages2.length;
  }

  /** Navega hacia la imagen siguiente del Proyecto 3 */
  nextImage2() {
    this.currentIndex2 =
      (this.currentIndex2 + 1) % this.projectImages2.length;
  }

  /** Navega hacia la imagen anterior del Proyecto 4 */
  prevImage3() {
    this.currentIndex3 =
      (this.currentIndex3 - 1 + this.projectImages3.length) % this.projectImages3.length;
  }

  /** Navega hacia la imagen siguiente del Proyecto 4 */
  nextImage3() {
    this.currentIndex3 =
      (this.currentIndex3 + 1) % this.projectImages3.length;
  }

   /** Navega hacia la imagen anterior del Proyecto 5 */
  prevImage4() {
    this.currentIndex4 =
      (this.currentIndex4 - 1 + this.projectImages4.length) % this.projectImages4.length;
  }

  /** Navega hacia la imagen siguiente del Proyecto 5 */
  nextImage4() {
    this.currentIndex4 =
      (this.currentIndex4 + 1) % this.projectImages4.length;
  }

} 
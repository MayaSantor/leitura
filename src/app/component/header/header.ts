import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header  implements AfterViewInit {
  menuAtivo = false;
  secaoAtiva = '';
  headerHeight = 0;

  ngAfterViewInit() {
    const header = document.querySelector('header');
    this.headerHeight = header?.clientHeight || 0;
    this.atualizaSecaoAtiva();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.atualizaSecaoAtiva();
  }

  toggleMobileMenu() {
    this.menuAtivo = !this.menuAtivo;
  }

  closeMobileMenu() {
    this.menuAtivo = false;
  }

  scrollPara(id: string, event: Event) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - this.headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    this.closeMobileMenu();
  }

  atualizaSecaoAtiva() {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY + this.headerHeight;

    sections.forEach(section => {
      const el = section as HTMLElement;
      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        this.secaoAtiva = el.id;
      }
    });
  }
}
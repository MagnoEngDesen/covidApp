import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  segmentValue = '1';
  request: any[] = [];
  donors: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.donors = [
      {id: 1, nome: 'Raimudinho da Silva', age: 25, endereco: 'Pinheiro, MA', genero: 'Masculino',
      tipoSaguinio:'B+', foto: 'assets/imagem/homen1.png', distancia: 1,
      telefone: '999990000', email: 'zera2s@zec.com' },
      {id: 2, nome: 'Pedro Silva', age: 33, endereco: 'Chapadinha, MA', genero: 'Masculino',
      tipoSaguinio:'O+', foto: 'assets/imagem/homen2.png', distancia: 2,
      telefone: '88880000', email: 'kas@kas.com' },
      {id: 3, nome: 'Rita Cunha', age: 45, endereco: 'Maracaçume, MA', genero: 'Femenino',
      tipoSaguinio:'O-', foto: 'assets/imagem/mulher2.png', distancia: 5,
      telefone: '6666660000', email: 'flor@ogame.com' },
      {id: 4, nome: 'Bruna Ribeiro', age: 44, endereco: 'Centro Novo, MA', genero: 'Femenino',
      tipoSaguinio:'AB-', foto: 'assets/imagem/mulher3.png', distancia: 20,
      telefone: '777700000', email: 'abd@zce2.com' },
      {id: 5, nome: 'Joy Alves', age: 54, endereco: 'Chega Tudo, MA', genero: 'Femenino',
      tipoSaguinio:'B+', foto: 'assets/imagem/mulher.png', distancia: 72,
      telefone: '989808000', email: 'kllm@zce2.com' },
    ];
    this.request = [
      {id: 1, nome: 'Pinto Alves', age: 6, endereco: 'Limão, MA', genero: 'Masculino',
      tipoSaguinio:'A+', foto: 'assets/imagem/homen2.png', distancia: 8,
      telefone: '854480025', email: 'asc3@zecs.com' },
      {id: 2, nome: 'Alves Silva', age: 20, endereco: 'Barro Branco, MA', genero: 'Masculino',
      tipoSaguinio:'O+', foto: 'assets/imagem/homen3.png', distancia: 15,
      telefone: '42292285', email: 'kill@kas.com' },
      {id: 3, nome: 'Maria Silva', age: 45, endereco: 'Bom Jardin, MA', genero: 'Femenino',
      tipoSaguinio:'O-', foto: 'assets/imagem/mulher3.png', distancia: 6.7,
      telefone: '6666660000', email: 'rosa@ogame.com' },
      {id: 4, nome: 'Rebeca Cunha', age: 55, endereco: 'Santa Clara, MA', genero: 'Femenino',
      tipoSaguinio:'AB-', foto: 'assets/imagem/mulher.png', distancia: 21.3,
      telefone: '6969690000', email: 'cafe@zce2.com' },
      {id: 5, nome: 'Jurema', age: 35, endereco: 'Quadra 30, MA', genero: 'Femenino',
      tipoSaguinio:'B+', foto: 'assets/imagem/mulher2.png', distancia: 35,
      telefone: '332299000', email: 'ratob@zce2.com' },
    ];
  }

  segmentChanged(event) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }
}

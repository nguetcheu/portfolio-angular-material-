import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  techno: {titre: string, categorie: string, infos: string, url: string}[] = [
    {titre: 'PHP', categorie: 'Développement web', infos: 'PHP: Hypertext Preprocessor, plus connu sous son sigle PHP, est un langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP.', url: 'https://www.developpez.net/forums/attachments/p497134d1/a/a/a'},
    {titre: 'Flutter', categorie: 'Développement mobile', infos: 'Flutter est un kit de développement logiciel interface utilisateur open-source créé par Google. Il est utilisé pour développer des applications pour Android, iOS, Linux, Mac, Windows, Google Fuchsia et le web à partir une seule base de code.', url: 'https://www.linuxadictos.com/wp-content/uploads/Flutter.png.webp'},
    {titre: 'C', categorie: 'Développement desktop', infos: 'C est un langage de programmation impératif généraliste, de bas niveau. Inventé au début des années 1970 pour réécrire Unix, C est devenu un des langages les plus utilisés, encore de nos jours.', url: 'https://trustmyscience.com/wp-content/uploads/2020/01/langage-c-popularite-770x419.jpg'},
  ];
}


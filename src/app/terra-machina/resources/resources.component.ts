import { Component, OnInit } from '@angular/core';
import {
  faGavel,
  faDragon,
  faTools,
  faBullseye,
  IconDefinition,
  faChessKnight,
  faUserNurse,
  faSkullCrossbones,
  faHatWizard,
  faHandRock,
  faArrowCircleDown,
  faBook,
  faAddressBook,
  faCircle
} from '@fortawesome/free-solid-svg-icons';

@Component({
  moduleId: module.id,
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  faArrowCircleDown = faArrowCircleDown;
  faBook = faBook;
  faAddressBook = faAddressBook;
  faCircle = faCircle;

  public classes: {
    name: string;
    icon: IconDefinition;
    description: string;
  }[] = [
    {
      name: 'Brute',
      icon: faGavel,
      description:
        'A muscle-bound class who smashes any obstacle with their hammer.',
    },
    {
      name: 'Dragoon',
      icon: faDragon,
      description:
        ' A melee class that is known for their high jumping and dragon-like abilities.',
    },
    {
      name: 'Engineer',
      icon: faTools,
      description: 'A support class that uses science and technology.',
    },
    {
      name: 'Gunslinger',
      icon: faBullseye,
      description: 'A long-range class that shoots guns at their enemy.',
    },
    {
      name: 'Knight',
      icon: faChessKnight,
      description: 'A sword-wielder with a sense of honor.',
    },
    {
      name: 'Protector',
      icon: faUserNurse,
      description: 'A magical class that aids their allies when necessary.',
    },
    {
      name: 'Scoundrel',
      icon: faSkullCrossbones,
      description: 'A roguish class that strikes from the shadows.',
    },
    {
      name: 'Sorcerex',
      icon: faHatWizard,
      description:
        'A magical class that uses the elements to target their enemies.',
    },
    {
      name: 'Warrior',
      icon: faHandRock,
      description: ' A melee class that uses the energy within for combat.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

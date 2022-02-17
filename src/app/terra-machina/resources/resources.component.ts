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
  faCircle,
  faCrosshairs,
  faFeatherAlt,
  faPray,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  faArrowCircleDown = faArrowCircleDown;
  faBook = faBook;
  faAddressBook = faAddressBook;
  faCircle = faCircle;

  public sections: any[] = [
    {
      name: 'Starting Documents',
      downloads: [
        {
          name: 'Terra Machina Rulebook',
          icon: faBook,
          description: 'The core rulebook.',
          file: 'Terra-Machina-Rulebook'
        },
        {
          name: 'Basic Character Sheet',
          icon: faAddressBook,
          description: 'Character sheet that all players use regardless of class.',
          file: 'Basic_Character_Sheet'
        },
        {
          name: 'Custom Moves Sheet',
          icon: faCircle,
          description: 'Sheet for any custom moves that the GM or scenario gives to the player.',
          file: 'Custom_Moves_Sheet'
        },
      ],
    },
    {
      name: 'Basic Classes',
      downloads: [
        {
          name: 'Engineer',
          icon: faTools,
          description: 'A support class that uses science and technology.',
        },
        {
          name: 'Gunslinger',
          icon: faCrosshairs,
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
      ],
    },

    {
      name: 'Advanced Classes',
      downloads: [
        {
          name: 'Assassin',
          icon: faBullseye,
          description:
            'A sharpshooter intent to kill.',
        },
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
          name: 'Gladiator',
          icon: faFeatherAlt,
          description: 'A machine of war dedicated to a single master.',
        },
        {
          name: 'Monk',
          icon: faPray,
          description: 'A powerful offensive class with healing capabilities.',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

export default class CharacterSheetModel{
  public Alias?: string;
  public RealName?: string;

  // Stats
  public Grace?: number;
  public Intellect?: number;
  public Might?: number;
  public Spirit?: number;

  public BasicMoves: {stat: string, moves: {name: string, description: string, value?: number}[]}[] =
  [
    {
      stat: "Grace",
      moves:[
        {
          name: "Diplomacy",
          description: "Roll when speaking to convince others or to sense if others are lying",
          value: undefined
        },
        {
          name: "Movement",
          description: "Roll when determining speed, stealth, and agility",
          value: undefined
        },
        {
          name: "Shoot",
          description: "Roll when shooting a firearm or throwing an object",
          value: undefined
        }
      ]
    },
    {
      stat: "Intellect",
      moves:[
        {
          name: "Deduction",
          description: "Roll when trying to figure out how something works or solving a puzzle",
          value: undefined
        },
        {
          name: "Knowledge",
          description: "Roll when determining if a character knows something that they learned once",
          value: undefined
        },
        {
          name: "Tinker",
          description: "Roll when building or crafting something or operating machinery",
          value: undefined
        }
      ]
    },
    {
      stat: "Might",
      moves:[
        {
          name: "Brawn",
          description: "Roll when determining whether a character can carry, push, or break an object",
          value: undefined
        },
        {
          name: "Melee",
          description: "Roll when attacking with a melee weapon or unarmed",
          value: undefined
        },
        {
          name: "Resilience",
          description: "Roll when purposefully defending",
          value: undefined
        }
      ]
    },
    {
      stat: "Spirit",
      moves:[
        {
          name: "Willpower",
          description: "Roll when dealing with magical or psychological effects",
          value: undefined
        },
        {
          name: "Search",
          description: "Roll when looking for something specific",
          value: undefined
        },
        {
          name: "Sense",
          description: "Roll when sensing danger or anything important in the environment around you",
          value: undefined
        }
      ]
    },
  ]

  // Might Basic Moves
  public Brawn?: number;
  public Melee?: number;
  public Resilience?: number;

  // Spirit Basic Moves
  public Willpower?: number;
  public Search?: number;
  public Sense?: number;

  public PowerOrigin?: string;

  PowerSets: string[] = [];
  Weaknesses: string[] = [];

  Alignment?: {authority: string, morals: string} = {authority: "", morals: ""};

  OriginAndNotes?: string;

  Skills: {description:string, energyCost: number}[] = [];
}

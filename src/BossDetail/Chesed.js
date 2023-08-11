const Chesed = {
  bossName: "Chesed",
  terrain: ["Indoors", "Outdoors"],
  armorType: "Heavy Armor",
  attackType: "Explosive",
  skills: [
    {
      normal: [
        {
          skillname: "Call of the Throne",
          description: (
            <p>
              Summons automaton soldiers. Gradually fills Chesed's ATG gauge
              while soldiers are alive. Chesed's ATG gauge resets after all
              soldiers have been defeated.
            </p>
          ),
          url: "/images/Boss/Chesed/Chesed_skill1.png",
        },
        {
          skillname: "Witness My Supreme Powers",
          description: (
            <p>
              When Chesed's ATG gauge is half filled, increases the
              <b> attack</b> and <b>movement speed</b> of all remaining soldiers
              by 50% for 60s. This skill can be cancelled with crowd control
              effects.
            </p>
          ),
          url: "/images/Boss/Chesed/Chesed_skill2.png",
        },
        {
          skillname: "Majesty's Mercy",
          description: (
            <p>
              When ATG gauge is at max, Deals <b>2000% damage</b> to all
              enemies.
            </p>
          ),
          url: "/images/Boss/Chesed/Chesed_skill3.png",
        },
        {
          skillname: "Exposed Throne",
          description: (
            <p>
              Immune to all effects that increase damage taken. When stagger
              gauge is full, reveals Chesed's core for 20s, and increases damage
              taken by <b>900%</b>.
            </p>
          ),
          url: "/images/Boss/Chesed/Chesed_skill4.png",
        },
      ],
      insane: [
        {
          skillname: "Call of the Throne",
          description: (
            <p>
              Summons automaton soldiers. Gradually fills Chesed's ATG gauge
              while soldiers are alive. Chesed's ATG gauge resets after all
              soldiers have been defeated.
            </p>
          ),
          url: "/images/Boss/Chesed/Chesed_skill1.png",
        },
        {
          skillname: "Witness My Supreme Powers",
          description: (
            <p>
              When Chesed's ATG gauge is half filled, increases the
              <b> attack</b> and <b>movement speed</b> of all remaining soldiers
              by 50% for 60s. This skill can be cancelled with crowd control
              effects.
            </p>
          ),
          url: "/images/Boss/Chesed/Chesed_skill2.png",
        },
        {
          skillname: "Majesty's Mercy",
          description: (
            <p>
              When ATG gauge is at max, Deals <b>2000% damage</b> to all
              enemies.
            </p>
          ),
          url: "/images/Boss/Chesed/Chesed_skill3.png",
        },
        {
          skillname: "Exposed Throne",
          description: (
            <p>
              Immune to all effects that increase damage taken. When stagger
              gauge is full, reveals Chesed's core for 20s, and increases damage
              taken by <b>900%</b>.
            </p>
          ),
          url: "/images/Boss/Chesed/Chesed_skill4.png",
        },
      ],
    },
  ],
  teams: [
    {
      normal: [
        {
          score: "Outdoors normal",
          lineUp: [
            { displayName: "Aru", name: "miyako" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
        {
          score: 1234,
          lineUp: [
            { displayName: "Aru", name: "aru_newyear" },
            { displayName: "Aru", name: "ch0215" },
            { displayName: "Aru", name: "maki" },
            { displayName: "Aru", name: "aris" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "kotama" },
          ],
        },
        {
          score: "14,000,000",
          lineUp: [
            { displayName: "Aru", name: "momoi" },
            { displayName: "Aru", name: "midori" },
            { displayName: "Aru", name: "shun" },
            { displayName: "Aru", name: "iori" },
            { displayName: "Aru", name: "serina" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
      ],
      insane: [
        {
          score: "Outdoors insane",
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
        {
          score: "insane2",
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
        {
          score: 1235,
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
      ],
    },
    {
      normal: [
        {
          score: "Urban normal",
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
        {
          score: 1234,
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
        {
          score: 1235,
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Amogus", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
      ],
      insane: [
        {
          score: "Urban insane",
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
        {
          score: "insane2",
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
        {
          score: 1235,
          lineUp: [
            { displayName: "Aru", name: "aru" },
            { displayName: "Aru", name: "ch0218" },
            { displayName: "Aru", name: "hina" },
            { displayName: "Aru", name: "yuzu" },
            { displayName: "Aru", name: "ako" },
            { displayName: "Aru", name: "hibiki" },
          ],
        },
      ],
    },
  ],
};

export const ChesedDetail = Chesed;

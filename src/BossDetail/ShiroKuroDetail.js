const ShiroKuro = {
  bossName: "ShiroKuro",
  terrain: ["Indoors", "Urban"],
  armorType: "Special Armor",
  attackType: "Penetration",
  skills: [
    {
      normal: [
        {
          skillname: "Dun-Dun-Dun! (Shiro)",
          description: (
            <p>
              Places bombs that explode after a short while and
              <b> deal 400% </b>
              damage to enemies in a circular area. Damage and number of bombs
              placed increases as Shiro's ATG gauge increases.
            </p>
          ),
          url: "/images/Boss/ShiroKuro/ShiroKuro_skill1.png",
        },
        {
          skillname: "Keep Rollin' Rollin' Rollin'!",
          description: (
            <p>
              Summons a rolling bomb that deals <b>600% damage</b> to enemies in
              a straight line. The bomb deals <b>300% damage</b> to obstacles in
              its path. If an obstacle is hit but not destroyed, the bomb will
              bounce in the opposite direction towards Shiro, increasing her
              stagger gauge by a significant amount.
            </p>
          ),
          url: "/images/Boss/ShiroKuro/ShiroKuro_skill2.png",
        },
        {
          skillname: "Charge!!! (Kuro)",
          description: (
            <p>
              Summons theme park rides that deals <b>400% damage</b> to enemies
              in a straight line. If Kuro is hit by this attack herself,
              increases Kuro's stagger gauge by a significant amount.
            </p>
          ),
          url: "/images/Boss/ShiroKuro/ShiroKuro_skill3.png",
        },
      ],
      insane: [
        {
          skillname: "Dun-Dun-Dun! (Shiro)",
          description: (
            <p>
              Places bombs that explode after a short while and deal
              <b> 900% damage </b>
              to enemies in a circular area. Damage and number of bombs placed
              increases as Shiro's ATG gauge increases. Also places ice bombs
              that additionally decrease <b>movement speed</b> of enemies hit by
              80% for 40s.
            </p>
          ),
          url: "/images/Boss/ShiroKuro/ShiroKuro_skill1.png",
        },
        {
          skillname: "Keep Rollin' Rollin' Rollin'! (Shiro)",
          description: (
            <p>
              Summons a rolling bomb that deals <b>1500% damage</b> to enemies
              in a straight line. If an enemy with decreased movement speed is
              hit, deals an additional 600,000 damage. The bomb deals
              <b> 300% damage</b> to obstacles in its path. If an obstacle is
              hit but not destroyed, the bomb will bounce in the opposite
              direction towards Shiro, increasing her stagger gauge by a
              significant amount and <b>damage taken</b> by 50% for 40s.
            </p>
          ),
          url: "/images/Boss/ShiroKuro/ShiroKuro_skill2.png",
        },
        {
          skillname: "Charge!!! (Kuro)",
          description: (
            <p>
              Summons theme park rides that deals <b>500% damage</b> to enemies
              in a straight line. If an enemy with decreased movement speed is
              hit, deals an additional <b>600,000 damage</b>. If Kuro is hit by
              this attack herself, increases Kuro's stagger gauge by a
              significant amount and <b>damage taken</b> by 50% for 40s.
            </p>
          ),
          url: "/images/Boss/ShiroKuro/ShiroKuro_skill3.png",
        },
        {
          skillname: "Apathy Syndrome (Kuro)",
          description: (
            <p>
              Deals <b>100% damage</b> to enemies and decreases their
              <b> movement speed</b> by 80% for 40s.
            </p>
          ),
          url: "/images/Boss/ShiroKuro/ShiroKuro_skill4.png",
        },
        {
          skillname: "Horror of Slumpia",
          description: (
            <p>
              Decreases all enemies' <b>recovery rate</b> by 80%. This debuff
              <b> cannot be removed</b>.
            </p>
          ),
          url: "/images/Boss/ShiroKuro/ShiroKuro_skill5.png",
        },
      ],
    },
  ],
  teams: [
    {
      normal: [
        {
          score: "14M - 14.5M",
          lineUp: [
            { displayName: "Izuna", name: "izuna" },
            { displayName: "Izuna.S", name: "ch0179" },
            { displayName: "Hasumi.G", name: "ch0190" },
            { displayName: "Wakamo", name: "wakamo" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "14M - 14.3M",
          lineUp: [
            { displayName: "Haruna", name: "haruna" },
            { displayName: "Aris", name: "aris" },
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Iori", name: "iori" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "14M - 14.2M",
          lineUp: [
            { displayName: "Azusa.S", name: "azusa_swimsuit" },
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Asuna", name: "asuna" },
            { displayName: "Izuna.S", name: "ch0179" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0180" },
          ],
        },
        {
          score: "13.8M - 14M",
          lineUp: [
            { displayName: "Haruna", name: "haruna" },
            { displayName: "Izuna", name: "izuna" },
            { displayName: "Asuna", name: "asuna" },
            { displayName: "Iori", name: "iori" },
            { displayName: "Serina", name: "serina" },
            { displayName: "Kotama", name: "kotama" },
          ],
        },
      ],
      insane: [
        {
          score: "25M - 25.8M",
          lineUp: [
            { displayName: "Izuna.S", name: "ch0179" },
            { displayName: "Azusa.S", name: "azusa_swimsuit" },
            { displayName: "Wakamo", name: "wakamo" },
            { displayName: "Michiru", name: "ch0113" },
            { displayName: "Shizuko", name: "shizuko" },
            { displayName: "Fuuka.NY", name: "ch0177" },

            { displayName: "Azusa.S", name: "azusa_swimsuit" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Hasumi.G", name: "ch0190" },
            { displayName: "Izuna", name: "izuna" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "24M - 24.7M",
          lineUp: [
            { displayName: "Haruna", name: "haruna" },
            { displayName: "Izuna", name: "izuna" },
            { displayName: "Michiru", name: "ch0113" },
            { displayName: "Wakamo", name: "wakamo" },
            { displayName: "Shizuko", name: "shizuko" },
            { displayName: "Shizuko.S", name: "ch0180" },

            { displayName: "Hifumi", name: "hihumi" },
            { displayName: "Wakamo", name: "wakamo" },
            { displayName: "Asuna", name: "asuna" },
            { displayName: "Azusa.S", name: "azusa_swimsuit" },
            { displayName: "Nodoka.O", name: "ch0165" },
            { displayName: "Ako", name: "ako" },
          ],
        },
        {
          score: "25M - 25.5M",
          lineUp: [
            { displayName: "Izuna.S", name: "ch0179" },
            { displayName: "Wakamo", name: "wakamo" },
            { displayName: "Izuna", name: "izuna" },
            { displayName: "Michiru", name: "ch0113" },
            { displayName: "Shizuko", name: "shizuko" },
            { displayName: "Kotama", name: "kotama" },

            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Azusa.S", name: "azusa_swimsuit" },
            { displayName: "Hasumi.G", name: "ch0190" },
            { displayName: "Asuna", name: "asuna" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
      ],
    },
    {
      normal: [
        {
          score: "14M - 14.6M",
          lineUp: [
            { displayName: "Haruna", name: "haruna" },
            { displayName: "Izuna", name: "izuna" },
            { displayName: "Izuna.S", name: "ch0179" },
            { displayName: "Wakamo", name: "wakamo" },
            { displayName: "Shizuko.S", name: "ch0180" },
            { displayName: "Ako", name: "ako" },
          ],
        },
        {
          score: "14M - 14.2M",
          lineUp: [
            { displayName: "Asuna", name: "asuna" },
            { displayName: "Haruna", name: "haruna" },
            { displayName: "Chise", name: "chise" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Serina", name: "serina" },
            { displayName: "Kotama", name: "kotama" },
          ],
        },
        {
          score: "14M - 14.4M",
          lineUp: [
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Hasumi.G", name: "ch0190" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Haruna", name: "haruna" },
            { displayName: "Shizuko.S", name: "ch0180" },
            { displayName: "Ako", name: "ako" },
          ],
        },
      ],
      insane: [
        {
          score: "25M - 25.6M",
          lineUp: [
            { displayName: "Azusa.S", name: "azusa_swimsuit" },
            { displayName: "Izuna", name: "izuna" },
            { displayName: "Wakamo", name: "wakamo" },
            { displayName: "Izuna.S", name: "ch0179" },
            { displayName: "Kotama", name: "kotama" },
            { displayName: "Shizuko", name: "shizuko" },

            { displayName: "Shinatsu.O", name: "ch0163" },
            { displayName: "Izuna", name: "izuna" },
            { displayName: "Haruna", name: "haruna" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Shizuko.S", name: "ch0180" },
            { displayName: "Ako", name: "ako" },
          ],
        },
        {
          score: "25M - 25.5M",
          lineUp: [
            { displayName: "Azusa.S", name: "azusa_swimsuit" },
            { displayName: "Izuna", name: "izuna" },
            { displayName: "Wakamo", name: "wakamo" },
            { displayName: "Izuna.S", name: "ch0179" },
            { displayName: "Kotama", name: "kotama" },
            { displayName: "Shizuko", name: "shizuko" },

            { displayName: "Asuna", name: "asuna" },
            { displayName: "Izuna", name: "izuna" },
            { displayName: "Hasumi.G", name: "ch0190" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Shizuko.S", name: "ch0180" },
            { displayName: "Ako", name: "ako" },
          ],
        },
        {
          score: "25M - 25.4M",
          lineUp: [
            { displayName: "Azusa.S", name: "azusa_swimsuit" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Wakamo", name: "wakamo" },
            { displayName: "Izuna.S", name: "ch0179" },
            { displayName: "Shizuko.S", name: "ch0180" },
            { displayName: "Shizuko", name: "shizuko" },

            { displayName: "Izuna", name: "izuna" },
            { displayName: "Michiru", name: "ch0113" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Shizuko.S", name: "ch0180" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Kotama", name: "kotama" },
          ],
        },
      ],
    },
  ],
};

export const ShiroKuroDetail = ShiroKuro;

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

export const ShiroKuroDetail = ShiroKuro;

const Binah = {
  bossName: "Binah",
  terrain: ["Outdoors", "Urban"],
  armorType: "Heavy Armor",
  attackType: "Penetration",
  skills: [
    {
      normal: [
        {
          skillname: "Atsilut's Light",
          description: (
            <p>
              Deal <b>120% damage</b> to enemies in a straight line.
            </p>
          ),
          url: "/images/Boss/Binah/Binah_skill1.png",
        },
        {
          skillname: "Fires of Severity",
          description: (
            <p>
              Deal <b>200% damage</b> to 4 enemies.
            </p>
          ),
          url: "/images/Boss/Binah/Binah_skill2.png",
        },
        {
          skillname: "Purifying Storm (Gauge Skill)",
          description: (
            <p>
              Deal <b>300% damage</b> to all enemies and decrease their
              <b> defense </b>
              by 50% for 30s.
            </p>
          ),
          url: "/images/Boss/Binah/Binah_skill3.png",
        },
      ],
      insane: [
        {
          skillname: "Atsilut's Light",
          description: (
            <p>
              Deal <b>120% damage</b> to enemies in a straight line.
            </p>
          ),
          url: "/images/Boss/Binah/Binah_skill1.png",
        },
        {
          skillname: "Fires of Severity",
          description: (
            <p>
              Deal <b>400% damage</b> to 4 enemies.
            </p>
          ),
          url: "/images/Boss/Binah/Binah_skill2.png",
        },
        {
          skillname: "Purifying Storm (Gauge Skill)",
          description: (
            <p>
              Deal <b>300% damage</b> to all enemies and decrease their
              <b> defense </b>
              by 50% for 30s.
            </p>
          ),
          url: "/images/Boss/Binah/Binah_skill3.png",
        },
        {
          skillname: "Raging Sandstorm",
          description: (
            <p>
              Decrease all enemies' <b>accuracy</b> by 20% and <b>stability </b>
              by 50%. This debuff <b>cannot be removed</b>.
            </p>
          ),
          url: "/images/Boss/Binah/Binah_skill4.png",
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

export const BinahDetail = Binah;

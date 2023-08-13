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
          score: "13.5M-14M",
          lineUp: [
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Kazusa", name: "kazusa" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Akane", name: "akane" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "13.5M-14M",
          lineUp: [
            { displayName: "Yuzu", name: "yuzu" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Akane", name: "akane" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "13.3M-13.7M",
          lineUp: [
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Akane", name: "akane" },
            { displayName: "Iori", name: "iori" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0180" },
          ],
        },
      ],
      insane: [
        {
          score: "24.7M-25M",
          lineUp: [
            { displayName: "Yuzu", name: "yuzu" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Akane", name: "akane" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "24.7M-24.92M",
          lineUp: [
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Kazusa", name: "kazusa" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Akane", name: "akane" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "24.5M-24.72M",
          lineUp: [
            { displayName: "Hasumi", name: "hasumi" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Akane", name: "akane" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "24.4M-24.6M",
          lineUp: [
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Kazusa", name: "kazusa" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Akane", name: "akane" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0180" },
          ],
        },
      ],
    },
    {
      normal: [
        {
          score: "13.5M-14M",
          lineUp: [
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Kazusa", name: "kazusa" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Akane", name: "akane" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "13.5M-14M",
          lineUp: [
            { displayName: "Yuzu", name: "yuzu" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Akane", name: "akane" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "13.3M-13.7M",
          lineUp: [
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Akane", name: "akane" },
            { displayName: "Iori", name: "iori" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0180" },
          ],
        },
      ],
      insane: [
        {
          score: "24.7M-25M",
          lineUp: [
            { displayName: "Yuzu", name: "yuzu" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Akane", name: "akane" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "24.7M-24.92M",
          lineUp: [
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Kazusa", name: "kazusa" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Akane", name: "akane" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "24.5M-24.72M",
          lineUp: [
            { displayName: "Hasumi", name: "hasumi" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Akane", name: "akane" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "24.4M-24.6M",
          lineUp: [
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Kazusa", name: "kazusa" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Akane", name: "akane" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Shizuko.S", name: "ch0180" },
          ],
        },
      ],
    },
  ],
};

export const BinahDetail = Binah;

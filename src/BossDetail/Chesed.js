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
          url: "/BlueArchive_Raid_Boss_App/images/Boss/Chesed/Chesed_skill1.png",
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
          url: "/BlueArchive_Raid_Boss_App/images/Boss/Chesed/Chesed_skill2.png",
        },
        {
          skillname: "Majesty's Mercy",
          description: (
            <p>
              When ATG gauge is at max, Deals <b>2000% damage</b> to all
              enemies.
            </p>
          ),
          url: "/BlueArchive_Raid_Boss_App/images/Boss/Chesed/Chesed_skill3.png",
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
          url: "/BlueArchive_Raid_Boss_App/images/Boss/Chesed/Chesed_skill4.png",
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
          url: "/BlueArchive_Raid_Boss_App/images/Boss/Chesed/Chesed_skill1.png",
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
          url: "/BlueArchive_Raid_Boss_App/images/Boss/Chesed/Chesed_skill2.png",
        },
        {
          skillname: "Majesty's Mercy",
          description: (
            <p>
              When ATG gauge is at max, Deals <b>2000% damage</b> to all
              enemies.
            </p>
          ),
          url: "/BlueArchive_Raid_Boss_App/images/Boss/Chesed/Chesed_skill3.png",
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
          url: "/BlueArchive_Raid_Boss_App/images/Boss/Chesed/Chesed_skill4.png",
        },
      ],
    },
  ],
  teams: [
    {
      normal: [
        {
          score: "14M - 14.4M",
          lineUp: [
            { displayName: "Iori", name: "iori" },
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Momoi", name: "momoi" },
            { displayName: "Midori", name: "midori" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0069" },
          ],
        },
        {
          score: "14M - 14.4M",
          lineUp: [
            { displayName: "Aru.NY", name: "aru_newyear" },
            { displayName: "Momoi", name: "momoi" },
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Iori", name: "iori" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0069" },
          ],
        },
        {
          score: "13.6M - 14M",
          lineUp: [
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Iori", name: "iori" },
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Aru.NY", name: "aru_newyear" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Karin", name: "karin" },
          ],
        },
        {
          score: "13M - 13.2M",
          lineUp: [
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Nonomi", name: "nonomi" },
            { displayName: "Tsurugi", name: "tsurugi" },
            { displayName: "Tsubaki", name: "tsubaki" },
            { displayName: "Karin", name: "karin" },
            { displayName: "Hanae", name: "hanae" },

            { displayName: "Iori", name: "iori" },
            { displayName: "Midori", name: "midori" },
            { displayName: "Momoi", name: "momoi" },
            { displayName: "Hoshino", name: "hoshino" },
            { displayName: "Hibiki", name: "hibiki" },
            { displayName: "Kotama", name: "kotama" },
          ],
        },
      ],
      insane: [
        {
          score: "25M - 25.7M",
          lineUp: [
            { displayName: "Aru.NY", name: "aru_newyear" },
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Momoi", name: "momoi" },
            { displayName: "Tsurugi", name: "tsurugi" },
            { displayName: "Ayane.S", name: "ch0176" },
            { displayName: "Moe", name: "moe" },

            { displayName: "Iori", name: "iori" },
            { displayName: "Izuna.S", name: "ch0179" },
            { displayName: "Shun", name: "shun" },
            { displayName: "Kazusa", name: "kazusa" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "25M - 25.5M ",
          lineUp: [
            { displayName: "Midori", name: "midori" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Momoi", name: "momoi" },
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Ayane.S", name: "ch0176" },
            { displayName: "Moe", name: "moe" },

            { displayName: "Iori", name: "iori" },
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Tsubaki", name: "tsubaki" },
            { displayName: "Kazusa", name: "kazusa" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "24.5M - 24.8M",
          lineUp: [
            { displayName: "Nonomi", name: "nonomi" },
            { displayName: "Momoi", name: "momoi" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Karin", name: "karin" },
            { displayName: "Hanae", name: "hanae" },

            { displayName: "Ui", name: "ch0169" },
            { displayName: "Hasumi", name: "hasumi" },
            { displayName: "Tsubaki", name: "tsubaki" },
            { displayName: "Iori", name: "iori" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
        {
          score: "23M - 24M",
          lineUp: [
            { displayName: "Sumire", name: "sumire" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Momoi", name: "momoi" },
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Hibiki", name: "hibiki" },
            { displayName: "Nodoka.O", name: "ch0165" },

            { displayName: "Midori", name: "midori" },
            { displayName: "Momoi", name: "momoi" },
            { displayName: "Tsubaki", name: "tsubaki" },
            { displayName: "Iori", name: "iori" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
          ],
        },
      ],
    },
    {
      normal: [
        {
          score: "---",
          lineUp: [
            { displayName: "Iori", name: "iori" },
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Momoi", name: "momoi" },
            { displayName: "Midori", name: "midori" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Karin", name: "karin" },
          ],
        },
        {
          score: "---",
          lineUp: [
            { displayName: "Momoi", name: "momoi" },
            { displayName: "Midori", name: "midori" },
            { displayName: "Nonomi", name: "nonomi" },
            { displayName: "Aru.NY", name: "aru_newyear" },
            { displayName: "Kotama", name: "kotama" },
            { displayName: "Hibiki", name: "hibiki" },

            { displayName: "Maki", name: "maki" },
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Neru", name: "neru" },
            { displayName: "Iori", name: "iori" },
            { displayName: "Karin", name: "karin" },
            { displayName: "Ako", name: "ako" },
          ],
        },
      ],
      insane: [
        {
          score: "---",
          lineUp: [
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Aru.NY", name: "aru_newyear" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Saki", name: "ch0144" },
            { displayName: "Serika.NY", name: "serika_newyear" },

            { displayName: "Iori", name: "iori" },
            { displayName: "Hoshino", name: "hoshino" },
            { displayName: "Momoi", name: "momoi" },
            { displayName: "Midori", name: "midori" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Karin", name: "karin" },
          ],
        },
        {
          score: "---",
          lineUp: [
            { displayName: "Midori", name: "midori" },
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Momoi", name: "momoi" },
            { displayName: "Tsurugi", name: "tsurugi" },
            { displayName: "Karin", name: "karin" },
            { displayName: "Saya.C", name: "saya_casual" },

            { displayName: "Shun", name: "shun" },
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Tsubaki", name: "tsubaki" },
            { displayName: "Hasumi", name: "hasumi" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Sena", name: "ch0081" },
          ],
        },
        {
          score: "---",
          lineUp: [
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Nonomi", name: "nonomi" },
            { displayName: "Atsuko", name: "atsuko" },
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Nodoka.O", name: "ch0165" },
            { displayName: "Hibiki", name: "hibiki" },

            { displayName: "Iori", name: "iori" },
            { displayName: "Midori", name: "midori" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Momoi", name: "momoi" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Karin", name: "karin" },
          ],
        },
        {
          score: "---",
          lineUp: [
            { displayName: "Momoi", name: "momoi" },
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Midori", name: "midori" },
            { displayName: "Karin", name: "karin" },
            { displayName: "Saya.C", name: "saya_casual" },

            { displayName: "Shinatsu.O", name: "ch0163" },
            { displayName: "Maki", name: "maki" },
            { displayName: "Natsu", name: "ch0155" },
            { displayName: "Neru", name: "neru" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Saki", name: "ch0144" },
          ],
        },
      ],
    },
  ],
};

export const ChesedDetail = Chesed;

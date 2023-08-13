const Perorozilla = {
  bossName: "Perorozilla",
  terrain: ["Indoors", "Outdoors"],
  armorType: "Special Armor",
  attackType: "Mystic",
  skills: [
    {
      normal: [
        {
          skillname: "Incandescent Eye Laser",
          description: (
            <p>
              Decreases <b>defense</b> of one enemy by <b>9,999</b> for 60s and
              continuously deals <b>90% damage</b> to them for 10s.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Perorozilla/Perorozilla_skill1.png",
        },
        {
          skillname: "Bubble",
          description: (
            <p>
              Deals <b>400% damage</b> to one enemy.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Perorozilla/Perorozilla_skill2.png",
        },
        {
          skillname: "Majesty's Mercy",
          description: (
            <p>
              Summons Perorominions and apply <b>Focused Target</b>.
              Perorominions are
              <b> immortal</b> and 100% of the damage taken by them will also be
              taken by Perorodzilla. If a Perorominions's HP drops below 50%,
              they will be knocked down and permanently inflicted with{" "}
              <b>stun</b> and allies will no longer prioritize attacking the
              down peroros.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Perorozilla/Perorozilla_skill3.png",
        },
        {
          skillname: "Absorb Perorominions",
          description: (
            <p>
              Absorbs all Perorominions. For every Perorominion that was knocked
              down, increases Perorodzilla's stagger gauge by a significant
              amount. When Perorodzilla is staggered, summons 5 broken
              Perorominions with reduced defense, these Perorominions are
              <b> immortal</b> and 100% of the damage taken by them will also be
              taken by Perorodzilla.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Perorozilla/Perorozilla_skill4.png",
        },
        {
          skillname: "Hyper Spiral Eye Laser",
          description: (
            <p>
              When ATG gauge is full, Deals <b>300% damage</b> to all enemies.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Perorozilla/Perorozilla_skill5.png",
        },
      ],
      insane: [
        {
          skillname: "Incandescent Eye Laser",
          description: (
            <p>
              Decreases <b>defense</b> of one enemy by <b>9,999</b> for 60s and
              continuously deals <b>90% damage</b> to them for 10s. At the end
              of the skill, if the Defense reduction effect remains, deals{" "}
              <b>250% damage</b> to enemies within a fan-shaped area.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Perorozilla/Perorozilla_skill1.png",
        },
        {
          skillname: "Bubble",
          description: (
            <p>
              Deals <b>400% damage</b> to one enemy.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Perorozilla/Perorozilla_skill2.png",
        },
        {
          skillname: "Majesty's Mercy",
          description: (
            <p>
              Summons Perorominions and apply <b>Focused Target</b>.
              Perorominions are
              <b> immortal</b> and 100% of the damage taken by them will also be
              taken by Perorodzilla. If a Perorominions's HP drops below 50%,
              they will be knocked down and permanently inflicted with{" "}
              <b>stun</b> and allies will no longer prioritize attacking the
              down peroros. Addtionally, summons a <b>Shiny Peroromions</b>{" "}
              which, when knocked down, deals <b>200,000 damage</b> to other
              Peroros in a circular area around it.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Perorozilla/Perorozilla_skill3.png",
        },
        {
          skillname: "Absorb Perorominions",
          description: (
            <p>
              Absorbs all Perorominions. For every Perorominion that was knocked
              down, increases Perorodzilla's stagger gauge by a significant
              amount. When Perorodzilla is staggered, summons 5 broken
              Perorominions with reduced defense, these Perorominions are
              <b> immortal</b> and 100% of the damage taken by them will also be
              taken by Perorodzilla.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Perorozilla/Perorozilla_skill4.png",
        },
        {
          skillname: "Hyper Spiral Eye Laser",
          description: (
            <p>
              When ATG gauge is full, Deals <b>300% damage</b> to all enemies.
            </p>
          ),
          url: "BlueArchive_Raid_Boss_App/images/Boss/Perorozilla/Perorozilla_skill5.png",
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
            { displayName: "Wakamo", name: "wakamo" },
            { displayName: "Hoshino", name: "hoshino" },
            { displayName: "Haruna", name: "haruna" },
            { displayName: "Azusa.S", name: "azusa_swimsuit" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Iroha", name: "ch0156" },
          ],
        },
        {
          score: "14M -14.4M",
          lineUp: [
            { displayName: "Mutsuki.NY", name: "mutsuki_newyear" },
            { displayName: "Natsu", name: "ch0155" },
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Karin.B", name: "ch0100" },
            { displayName: "Iroha", name: "ch0156" },
            { displayName: "Ako", name: "ako" },
          ],
        },
      ],
      insane: [
        {
          score: "22M -23.7M",
          lineUp: [
            { displayName: "Mutsuki.NY", name: "mutsuki_newyear" },
            { displayName: "Natsu", name: "ch0155" },
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Karin.B", name: "ch0100" },
            { displayName: "Iroha", name: "ch0156" },
            { displayName: "Ako", name: "ako" },
          ],
        },
        {
          score: "22M -23.5M",
          lineUp: [
            { displayName: "Aris", name: "aris" },
            { displayName: "Haruna", name: "haruna" },
            { displayName: "Wakamo", name: "wakamo" },
            { displayName: "Hoshino", name: "hoshino" },
            { displayName: "Hanae", name: "hanae" },
            { displayName: "Himari", name: "ch0159" },
            { displayName: "Karin.B", name: "ch0100" },
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Mutsuki.NY", name: "mutsuki_newyear" },
            { displayName: "Natsu", name: "ch0155" },
            { displayName: "Iroha", name: "ch0156" },
            { displayName: "Ako", name: "ako" },
          ],
        },
        {
          score: "22M -24.5M",
          lineUp: [
            { displayName: "Hoshino.S", name: "hoshino_swimsuit" },
            { displayName: "Karin.B", name: "ch0100" },
            { displayName: "Natsu", name: "ch0155" },
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Himari", name: "ch0159" },
            { displayName: "Wakamo", name: "wakamo" },
            { displayName: "Karin.B", name: "ch0100" },
            { displayName: "Mutsuki.NY", name: "mutsuki_newyear" },
            { displayName: "Shun", name: "shun" },
            { displayName: "Iroha", name: "ch0156" },
            { displayName: "Cherino.O", name: "ch0164" },
          ],
        },
      ],
    },
    {
      normal: [
        {
          score: "14M -14.4M",
          lineUp: [
            { displayName: "Mutsuki.NY", name: "mutsuki_newyear" },
            { displayName: "Natsu", name: "ch0155" },
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Karin.B", name: "ch0100" },
            { displayName: "Iroha", name: "ch0156" },
            { displayName: "Ako", name: "ako" },
          ],
        },
        {
          score: "13.8M -14.1M",
          lineUp: [
            { displayName: "Maki", name: "maki" },
            { displayName: "Hoshino", name: "hoshino" },
            { displayName: "Mutsuki.NY", name: "mutsuki_newyear" },
            { displayName: "Haruna", name: "haruna" },
            { displayName: "Irona", name: "ch0156" },
            { displayName: "Ako", name: "ako" },
          ],
        },
        {
          score: "13.8M - 14M",
          lineUp: [
            { displayName: "Chise", name: "chise" },
            { displayName: "Mutsuki.NY", name: "mutsuki_newyear" },
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Cherino", name: "cherino" },
            { displayName: "Iroha", name: "ch0156" },
            { displayName: "Ako", name: "ako" },
          ],
        },
        {
          score: "13.8M - 14M",
          lineUp: [
            { displayName: "Chise", name: "chise" },
            { displayName: "Mutsuki.NY", name: "mutsuki_newyear" },
            { displayName: "Koharu", name: "koharu" },
            { displayName: "Haruna", name: "haruna" },
            { displayName: "Iroha", name: "ch0156" },
            { displayName: "Ako", name: "ako" },
          ],
        },
      ],
      insane: [
        {
          score: "22M - 23.5M",
          lineUp: [
            { displayName: "Shun", name: "shun" },
            { displayName: "Hoshino", name: "hoshino" },
            { displayName: "Chise", name: "chise" },
            { displayName: "Aris", name: "aris" },
            { displayName: "Mari", name: "mari" },
            { displayName: "Iroha", name: "ch0156" },
          ],
        },
        {
          score: "22M - 23.4M",
          lineUp: [
            { displayName: "Chise", name: "chise" },
            { displayName: "Chise.S", name: "ch0178" },
            { displayName: "Hoshino", name: "hoshino" },
            { displayName: "Asuna.B", name: "ch0098" },
            { displayName: "Ayane.S", name: "ch0176" },
            { displayName: "Iroha", name: "ch0156" },
          ],
        },
        {
          score: "20M - 21M",
          lineUp: [
            { displayName: "Haruna", name: "haruna" },
            { displayName: "Chise", name: "chise" },
            { displayName: "Hoshino", name: "hoshino" },
            { displayName: "Hifumi", name: "hihumi" },
            { displayName: "Ayane.S", name: "ch0176" },
            { displayName: "Hanae", name: "hanae" },
            { displayName: "Mutsuki.NY", name: "mutsuki_newyear" },
            { displayName: "Natsu", name: "ch0155" },
            { displayName: "Ui", name: "ch0169" },
            { displayName: "Karin.B", name: "ch0100" },
            { displayName: "Ako", name: "ako" },
            { displayName: "Iroha", name: "ch0156" },
          ],
        },
      ],
    },
  ],
};

export const PerorozillaDetail = Perorozilla;

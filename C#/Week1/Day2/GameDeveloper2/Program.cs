MeleeFighter melee = new MeleeFighter("Melee Fighter");
RangedFighter ranged = new RangedFighter("Ranged Fighter");
MagicCaster mage = new MagicCaster("Magic Caster");

melee.PerformAttack(ranged, melee.AttackList[1]);
melee.Rage(mage);

ranged.PerformAttack(melee, ranged.AttackList[0]);
ranged.Dash();
ranged.PerformAttack(melee, ranged.AttackList[0]);

mage.PerformAttack(melee, mage.AttackList[0]);
mage.Heal(ranged);
mage.Heal(mage);
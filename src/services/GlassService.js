import { scriptSecret } from "constants";
import { DURABILITY_CONST, ENERGY_PER_DEPLETION_CONST, GLASSTYPES, glassesAttributes, timePerEnergy } from "utils/glassFactors";

export default class GlassService {
    static  getMinutesPerDepletion = (glassType, glassLevel) => {
      let selectedGlass = glassesAttributes[GLASSTYPES[glassType.toUpperCase()]];
      let durabilityMinutes = glassLevel * DURABILITY_CONST;
      let energyDepletedBase =
        ENERGY_PER_DEPLETION_CONST * selectedGlass.baseDurability;
      return energyDepletedBase * timePerEnergy + durabilityMinutes;
    };
}
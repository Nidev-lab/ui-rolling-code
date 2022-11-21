import defaultLogo from '../../assets/logos/default/RollingCodeNegro.png';

import defaultLabsLogo from '../../assets/logos/labs/RollingCodeLabsNegro.png';
import defaultLabsLogoWhite from '../../assets/logos/labs/RollingCodeLabsBlanco.png';
import defaultLabsLogoColor from '../../assets/logos/labs/RollingCodeLabsColor.png';

import defaultStudioLogo from '../../assets/logos/studio/RollingCodeStudioNegro.png';
import defaultStudioLogoWhite from '../../assets/logos/studio/RollingCodeStudioBlanco.png';
import defaultStudioLogoColor from '../../assets/logos/studio/RollingCodeStudioColor.png';

import defaultSchoolLogo from '../../assets/logos/school/RollingCodeSchoolNegro.png';
import defaultSchoolLogoWhite from '../../assets/logos/school/RollingCodeSchoolBlanco.png';
import defaultSchoolLogoColor from '../../assets/logos/school/RollingCodeSchoolColor.png';

const getLogoSelected = (area, variant) => {
  if (area === 'default') {
    return defaultLogo;
  }

  if (area === 'labs') {
    switch (variant) {
      case 'white':
        return defaultLabsLogoWhite;
      case 'color':
        return defaultLabsLogoColor;

      default:
        return defaultLabsLogo;
    }
  }

  if (area === 'studio') {
    switch (variant) {
      case 'white':
        return defaultStudioLogoWhite;
      case 'color':
        return defaultStudioLogoColor;

      default:
        return defaultStudioLogo;
    }
  }

  if (area === 'school') {
    switch (variant) {
      case 'white':
        return defaultSchoolLogoWhite;
      case 'color':
        return defaultSchoolLogoColor;

      default:
        return defaultSchoolLogo;
    }
  }
};

export default getLogoSelected;

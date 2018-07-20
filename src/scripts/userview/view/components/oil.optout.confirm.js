import { OIL_LABELS } from '../../userview_constants.js';
import { getLabel } from '../../userview_config.js';
import { CancelButton, ProceedButton } from './oil.buttons.js';
import '../../../../styles/optout_confirm.scss';

export const OptoutConfirmDialog = () => {
  let dialog = document.createElement('div');
  dialog.id = 'as-oil-optout-confirm';
  dialog.className = 'as-oil-optout-confirm';
  dialog.innerHTML = `
    <div class="as-oil-optout-confirm__modal">
      <div class="as-oil__heading">
        ${getLabel(OIL_LABELS.ATTR_LABEL_CPC_PURPOSE_OPTOUT_HEADING)}
      </div>
      <p class="as-oil__intro-txt">
        ${getLabel(OIL_LABELS.ATTR_LABEL_CPC_PURPOSE_OPTOUT_TEXT)}
      </p>
      <div class="as-oil-l-row as-oil-l-buttons">
        ${ProceedButton()}
        ${CancelButton()}
      </div>
    </div>
  `;
  return dialog;
}

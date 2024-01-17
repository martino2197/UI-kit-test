/**
 * IconDisplay module.
 * @module @massds/mayflower-react/IconDisplay
 * @requires module:@massds/mayflower-assets/scss/00-base/mixins/ma-button-reset
 * @requires module:@massds/mayflower-assets/scss/01-atoms/svg-icons
 * @requires module:@massds/mayflower-assets/scss/01-atoms/svg-loc-icons
 */
import React from "react";
import PropTypes from "prop-types";
// import ButtonCopy from "MayflowerReactButtons/ButtonCopy";
// eslint-disable-next-line
import * as Icon from "src/assets/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "src/components/Button";

const IconDisplay = ({ name, children }) => {
  //   const { name, childre } = props;
  //   const componentName = name && `Icon${name[0].toUpperCase() + name.slice(1)}`;
  //   const IconComponent = Icon?.[componentName] && Icon[componentName];
  return (
    <div
      className="flex flex-col justify-center items-center space-y-2"
      style={{ width: 180 }}
    >
      {/* {IconComponent && <IconComponent {...props} />} */}
      {children}
      <CopyToClipboard
        text={`import { ${name} } from "src/assets/icons"`}
        // onCopy={() => setcopied(true)}
      >
        <Button
          sx={{ width: 50, height: 20, fontSize: 10 }}
          size="small"
          variant="outlined"
          color="secondary"
        >
          Copy
        </Button>
      </CopyToClipboard>
    </div>
  );
};

// IconDisplay.propTypes = {
//   name: PropTypes.string.isRequired,
//   title: PropTypes.string,
//   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   eight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   classes: PropTypes.arrayOf(PropTypes.string),
//   ariaHidden: PropTypes.bool,
//   fill: PropTypes.string,
// };

export default IconDisplay;

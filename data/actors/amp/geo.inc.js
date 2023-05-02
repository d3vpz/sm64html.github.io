import { functions } from "../../dependencies/functions"
import { types } from "../../dependencies/types"

let dAmpGeo = [
   functions.GEO_SHADOW(0,0,0),
   functions.GEO_OPEN_NODE(),
      functions.GEO_SCALE(0x00, 16384),
      functions.GEO_OPEN_NODE(),
         functions.GEO_ANIMATED_PART(types.layers["LAYER_OPAQUE"], 0, 0, 0, null),
         functions.GEO_OPEN_NODE(),
            functions.GEO_ANIMATED_PART(types.layers["LAYER_ALPHA"], 0, 0, 0, dAmpEyeDl),
            functions.GEO_OPEN_NODE(),
               functions.GEO_ANIMATED_PART(types.layer["LAYER_OPAQUE"], 0, 0, 0, null),
               functions.GEO_OPEN_NODE(),
                  functions.GEO_SWITCH_CASE(2, geo_switch_anim_state),
                  functions.GEO_OPEN_NODE(),
                     functions.GEO_ANIMATED_PART(types.layers["LAYER_OPAQUE"], 0, 0, 0, null),
                     functions.GEO_ANIMATED_PART(types.layers["LAYER_ALPHA"], 0, 0, 0, dAmpElectricityDl),
                  functions.GEO_CLOSE_NODE(),
               functions.GEO_CLOSE_NODE(),
               functions.GEO_ANIMATED_PART(types.layer["LAYER_OPAQUE"], 0, 0, 0, null),
               functions.GEO_OPEN_NODE(),
                  functions.GEO_SWITCH_CASE(2, geo_switch_anim_state),
                  functions.GEO_OPEN_NODE(),
                     functions.GEO_ANIMATED_PART(types.layers["LAYER_OPAQUE"], 0, 0, 0, null),
                     functions.GEO_ANIMATED_PART(types.layers["LAYER_ALPHA"], 0, 0, 0, dAmpElectricityDl),
                  functions.GEO_CLOSE_NODE(),
                  functions.GEO_ANIMATED_PART(types.layer["LAYER_OPAQUE"], 0, 0, 0, null),
                  functions.GEO_OPEN_NODE(),
                     functions.GEO_SWITCH_CASE(2, geo_switch_anim_state),
                     functions.GEO_OPEN_NODE(),
                        functions.GEO_ANIMATED_PART(types.layers["LAYER_OPAQUE"], 0, 0, 0, null),
                        functions.GEO_ANIMATED_PART(types.layers["LAYER_ALPHA"], 0, 0, 0, dAmpElectricityDl),
                     


]
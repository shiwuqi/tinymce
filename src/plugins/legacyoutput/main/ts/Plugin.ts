/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import { Editor } from 'tinymce/core/api/Editor';
import PluginManager from 'tinymce/core/api/PluginManager';
import Formats from './core/Formats';

/**
 * This class contains all core logic for the legacyoutput plugin.
 *
 * @class tinymce.legacyoutput.Plugin
 * @private
 */

PluginManager.add('legacyoutput', (editor: Editor) => {
  Formats.setup(editor);
});

export default function () { }
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import { JAVA_LANGUAGE_ID, JAVA_LANGUAGE_NAME } from '../../common';
import { configuration, monarchLanguage } from "./java-monaco-language";

monaco.languages.register({
    id: JAVA_LANGUAGE_ID,
    extensions: ['.java', '.jav', '.class'],
    aliases: [JAVA_LANGUAGE_NAME, 'java'],
    mimetypes: ['text/x-java-source', 'text/x-java'],
});

monaco.languages.onLanguage(JAVA_LANGUAGE_ID, () => {
    monaco.languages.setLanguageConfiguration(JAVA_LANGUAGE_ID, configuration);
    monaco.languages.setMonarchTokensProvider(JAVA_LANGUAGE_ID, monarchLanguage);
});

/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2017 Adobe
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 */

import {ComponentMixin} from '../../../coralui-mixin-component';
import {Collection} from '../../../coralui-collection';

const CLASSNAME = '_coral-Shell-menubar';

/**
 @class Coral.Shell.MenuBar
 @classdesc A Shell MenuBar component
 @htmltag coral-shell-menubar
 @extends {HTMLElement}
 @extends {ComponentMixin}
 */
class ShellMenuBar extends ComponentMixin(HTMLElement) {
  /** @ignore */
  constructor() {
    super();
    
    this.items._startHandlingItems(true);
  }
  
  /**
   The item collection.
   
   @type {Collection}
   @readonly
   */
  get items() {
    // Construct the collection on first request:
    if (!this._items) {
      this._items = new Collection({
        host: this,
        itemTagName: 'coral-shell-menubar-item'
      });
    }
  
    return this._items;
  }
  
  /** @ignore */
  connectedCallback() {
    super.connectedCallback();
    
    this.classList.add(CLASSNAME);
  }
}

export default ShellMenuBar;

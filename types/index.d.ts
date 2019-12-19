declare global {
  /**
   * Forked from `https://github.com/adamhaile/surplus` and adapted for `babel-plugin-jsx-dom-expressions`.
   *
   * @see https://github.com/adamhaile/surplus/blob/master/index.d.ts
   * @see https://github.com/ryansolid/babel-plugin-jsx-dom-expressions
   */

  namespace JSX {
    type Element =
      | Node
      | ArrayElement
      | FunctionElement
      | string
      | number
      | boolean
      | undefined
      | unknown;

    interface ArrayElement extends Array<Element> {}
    interface FunctionElement {
      (): Element;
    }

    // Let TS know the name of the `children` property in order for it to be able to type check them.
    // https://github.com/Microsoft/TypeScript/issues/18357
    interface ElementChildrenAttribute {
      children: {};
    }

    type Child = Element | string | number | boolean | null | undefined;
    type Children =
      | Child
      | Child[]
      | (Child | Child[])[]
      | (() => Child)
      | (() => Child[]);

    interface EventHandler<T, E extends Event> {
      (e: E & { currentTarget: T; target: T }): void;
    }

    // Intrinsic attributes enable us to define certain keys as attributes on an element, while
    // at the same time hiding them from the element's `props`.
    // https://github.com/Microsoft/TypeScript/issues/5478
    interface IntrinsicAttributes {
      ref?: HTMLElement;
      forwardRef?: (e: HTMLElement) => void;
    }

    // https://github.com/ryansolid/babel-plugin-jsx-dom-expressions#special-binding
    interface CustomAttributes<T> {
      ref?: T | ((el: T) => void);
      forwardRef?: (el: T) => void;
      classList?: { [k: string]: boolean | undefined };
      events?: { [key: string]: EventHandler<T, CustomEvent> };
    }

    // Lowercase events are considered directly bound events, while camelCased events are delegated.
    // https://github.com/ryansolid/babel-plugin-jsx-dom-expressions#oneventname--model
    interface DOMAttributes<T> extends CustomAttributes<T> {
      children?: Children;
      innerHTML?: string;

      // Clipboard Events
      onCopy?: EventHandler<T, ClipboardEvent>;
      oncopy?: EventHandler<T, ClipboardEvent>;
      onCopyCapture?: EventHandler<T, ClipboardEvent>;
      oncopycapture?: EventHandler<T, ClipboardEvent>;
      onCut?: EventHandler<T, ClipboardEvent>;
      oncut?: EventHandler<T, ClipboardEvent>;
      onCutCapture?: EventHandler<T, ClipboardEvent>;
      oncutcapture?: EventHandler<T, ClipboardEvent>;
      onPaste?: EventHandler<T, ClipboardEvent>;
      onpaste?: EventHandler<T, ClipboardEvent>;
      onPasteCapture?: EventHandler<T, ClipboardEvent>;
      onpastecapture?: EventHandler<T, ClipboardEvent>;

      // Composition Events
      onCompositionEnd?: EventHandler<T, CompositionEvent>;
      oncompositionend?: EventHandler<T, CompositionEvent>;
      onCompositionEndCapture?: EventHandler<T, CompositionEvent>;
      oncompositionendcapture?: EventHandler<T, CompositionEvent>;
      onCompositionStart?: EventHandler<T, CompositionEvent>;
      oncompositionstart?: EventHandler<T, CompositionEvent>;
      onCompositionStartCapture?: EventHandler<T, CompositionEvent>;
      oncompositionstartcapture?: EventHandler<T, CompositionEvent>;
      onCompositionUpdate?: EventHandler<T, CompositionEvent>;
      oncompositionupdate?: EventHandler<T, CompositionEvent>;
      onCompositionUpdateCapture?: EventHandler<T, CompositionEvent>;
      oncompositionupdatecapture?: EventHandler<T, CompositionEvent>;

      // Focus Events
      onFocus?: EventHandler<T, FocusEvent>;
      onfocus?: EventHandler<T, FocusEvent>;
      onFocusCapture?: EventHandler<T, FocusEvent>;
      onfocuscapture?: EventHandler<T, FocusEvent>;
      onBlur?: EventHandler<T, FocusEvent>;
      onblur?: EventHandler<T, FocusEvent>;
      onBlurCapture?: EventHandler<T, FocusEvent>;
      onblurcapture?: EventHandler<T, FocusEvent>;

      // Form Events
      onChange?: EventHandler<T, Event>;
      onchange?: EventHandler<T, Event>;
      onChangeCapture?: EventHandler<T, Event>;
      onchangecapture?: EventHandler<T, Event>;
      onInput?: EventHandler<T, InputEvent>;
      oninput?: EventHandler<T, InputEvent>;
      onInputCapture?: EventHandler<T, InputEvent>;
      oninputcapture?: EventHandler<T, InputEvent>;
      onReset?: EventHandler<T, Event>;
      onreset?: EventHandler<T, Event>;
      onResetCapture?: EventHandler<T, Event>;
      onresetcapture?: EventHandler<T, Event>;
      onSubmit?: EventHandler<T, FocusEvent>;
      onsubmit?: EventHandler<T, FocusEvent>;
      onSubmitCapture?: EventHandler<T, FocusEvent>;
      onsubmitcapture?: EventHandler<T, FocusEvent>;

      // Image Events
      onLoad?: EventHandler<T, Event>;
      onload?: EventHandler<T, Event>;
      onLoadCapture?: EventHandler<T, Event>;
      onloadcapture?: EventHandler<T, Event>;
      onError?: EventHandler<T, Event>; // also a Media Event
      onerror?: EventHandler<T, Event>; // also a Media Event
      onErrorCapture?: EventHandler<T, Event>; // also a Media Event
      onerrorcapture?: EventHandler<T, Event>; // also a Media Event

      // Keyboard Events
      onKeyDown?: EventHandler<T, KeyboardEvent>;
      onkeydown?: EventHandler<T, KeyboardEvent>;
      onKeyDownCapture?: EventHandler<T, KeyboardEvent>;
      onkeydowncapture?: EventHandler<T, KeyboardEvent>;
      onKeyPress?: EventHandler<T, KeyboardEvent>;
      onkeypress?: EventHandler<T, KeyboardEvent>;
      onKeyPressCapture?: EventHandler<T, KeyboardEvent>;
      onkeypresscapture?: EventHandler<T, KeyboardEvent>;
      onKeyUp?: EventHandler<T, KeyboardEvent>;
      onkeyup?: EventHandler<T, KeyboardEvent>;
      onKeyUpCapture?: EventHandler<T, KeyboardEvent>;
      onkeyupcapture?: EventHandler<T, KeyboardEvent>;

      // Pointer Events
      onGotPointerCapture?: EventHandler<T, PointerEvent>;
      ongotpointercapture?: EventHandler<T, PointerEvent>;
      onLostPointerCapture?: EventHandler<T, PointerEvent>;
      onlostpointercapture?: EventHandler<T, PointerEvent>;
      onPointerCancel?: EventHandler<T, PointerEvent>;
      onpointercancel?: EventHandler<T, PointerEvent>;
      onPointerDown?: EventHandler<T, PointerEvent>;
      onpointerdown?: EventHandler<T, PointerEvent>;
      onPointerEnter?: EventHandler<T, PointerEvent>;
      onpointerenter?: EventHandler<T, PointerEvent>;
      onPointerLeave?: EventHandler<T, PointerEvent>;
      onpointerleave?: EventHandler<T, PointerEvent>;
      onPointerMove?: EventHandler<T, PointerEvent>;
      onpointermove?: EventHandler<T, PointerEvent>;
      onPointerOver?: EventHandler<T, PointerEvent>;
      onpointerover?: EventHandler<T, PointerEvent>;
      onPointerOut?: EventHandler<T, PointerEvent>;
      onpointerout?: EventHandler<T, PointerEvent>;
      onPointerUp?: EventHandler<T, PointerEvent>;
      onpointerup?: EventHandler<T, PointerEvent>;

      // Media Events
      onAbort?: EventHandler<T, Event>;
      onabort?: EventHandler<T, Event>;
      onAbortCapture?: EventHandler<T, Event>;
      onabortcapture?: EventHandler<T, Event>;
      onCanPlay?: EventHandler<T, Event>;
      oncanplay?: EventHandler<T, Event>;
      onCanPlayCapture?: EventHandler<T, Event>;
      oncanplaycapture?: EventHandler<T, Event>;
      onCanPlayThrough?: EventHandler<T, Event>;
      oncanplaythrough?: EventHandler<T, Event>;
      onCanPlayThroughCapture?: EventHandler<T, Event>;
      oncanplaythroughcapture?: EventHandler<T, Event>;
      onDurationChange?: EventHandler<T, Event>;
      ondurationchange?: EventHandler<T, Event>;
      onDurationChangeCapture?: EventHandler<T, Event>;
      ondurationchangecapture?: EventHandler<T, Event>;
      onEmptied?: EventHandler<T, Event>;
      onemptied?: EventHandler<T, Event>;
      onEmptiedCapture?: EventHandler<T, Event>;
      onemptiedcapture?: EventHandler<T, Event>;
      onEncrypted?: EventHandler<T, Event>;
      onencrypted?: EventHandler<T, Event>;
      onEncryptedCapture?: EventHandler<T, Event>;
      onencryptedcapture?: EventHandler<T, Event>;
      onEnded?: EventHandler<T, Event>;
      onended?: EventHandler<T, Event>;
      onEndedCapture?: EventHandler<T, Event>;
      onendedcapture?: EventHandler<T, Event>;
      onLoadedData?: EventHandler<T, Event>;
      onloadeddata?: EventHandler<T, Event>;
      onLoadedDataCapture?: EventHandler<T, Event>;
      onloadeddatacapture?: EventHandler<T, Event>;
      onLoadedMetadata?: EventHandler<T, Event>;
      onloadedmetadata?: EventHandler<T, Event>;
      onLoadedMetadataCapture?: EventHandler<T, Event>;
      onloadedmetadatacapture?: EventHandler<T, Event>;
      onLoadStart?: EventHandler<T, Event>;
      onloadstart?: EventHandler<T, Event>;
      onLoadStartCapture?: EventHandler<T, Event>;
      onloadstartcapture?: EventHandler<T, Event>;
      onPause?: EventHandler<T, Event>;
      onpause?: EventHandler<T, Event>;
      onPauseCapture?: EventHandler<T, Event>;
      onpausecapture?: EventHandler<T, Event>;
      onPlay?: EventHandler<T, Event>;
      onplay?: EventHandler<T, Event>;
      onPlayCapture?: EventHandler<T, Event>;
      onplaycapture?: EventHandler<T, Event>;
      onPlaying?: EventHandler<T, Event>;
      onplaying?: EventHandler<T, Event>;
      onPlayingCapture?: EventHandler<T, Event>;
      onplayingcapture?: EventHandler<T, Event>;
      onProgress?: EventHandler<T, Event>;
      onprogress?: EventHandler<T, Event>;
      onProgressCapture?: EventHandler<T, Event>;
      onprogresscapture?: EventHandler<T, Event>;
      onRateChange?: EventHandler<T, Event>;
      onratechange?: EventHandler<T, Event>;
      onRateChangeCapture?: EventHandler<T, Event>;
      onratechangecapture?: EventHandler<T, Event>;
      onSeeked?: EventHandler<T, Event>;
      onseeked?: EventHandler<T, Event>;
      onSeekedCapture?: EventHandler<T, Event>;
      onseekedcapture?: EventHandler<T, Event>;
      onSeeking?: EventHandler<T, Event>;
      onseeking?: EventHandler<T, Event>;
      onSeekingCapture?: EventHandler<T, Event>;
      onseekingcapture?: EventHandler<T, Event>;
      onStalled?: EventHandler<T, Event>;
      onstalled?: EventHandler<T, Event>;
      onStalledCapture?: EventHandler<T, Event>;
      onstalledcapture?: EventHandler<T, Event>;
      onSuspend?: EventHandler<T, Event>;
      onsuspend?: EventHandler<T, Event>;
      onSuspendCapture?: EventHandler<T, Event>;
      onsuspendcapture?: EventHandler<T, Event>;
      onTimeUpdate?: EventHandler<T, Event>;
      ontimeupdate?: EventHandler<T, Event>;
      onTimeUpdateCapture?: EventHandler<T, Event>;
      ontimeupdatecapture?: EventHandler<T, Event>;
      onVolumeChange?: EventHandler<T, Event>;
      onvolumechange?: EventHandler<T, Event>;
      onVolumeChangeCapture?: EventHandler<T, Event>;
      onvolumechangecapture?: EventHandler<T, Event>;
      onWaiting?: EventHandler<T, Event>;
      onwaiting?: EventHandler<T, Event>;
      onWaitingCapture?: EventHandler<T, Event>;
      onwaitingcapture?: EventHandler<T, Event>;

      // MouseEvents
      onClick?: EventHandler<T, MouseEvent>;
      onclick?: EventHandler<T, MouseEvent>;
      onClickCapture?: EventHandler<T, MouseEvent>;
      onclickcapture?: EventHandler<T, MouseEvent>;
      onContextMenu?: EventHandler<T, MouseEvent>;
      oncontextmenu?: EventHandler<T, MouseEvent>;
      onContextMenuCapture?: EventHandler<T, MouseEvent>;
      oncontextmenucapture?: EventHandler<T, MouseEvent>;
      onDoubleClick?: EventHandler<T, MouseEvent>;
      ondoubleclick?: EventHandler<T, MouseEvent>;
      onDoubleClickCapture?: EventHandler<T, MouseEvent>;
      ondoubleclickcapture?: EventHandler<T, MouseEvent>;
      onDrag?: EventHandler<T, DragEvent>;
      ondrag?: EventHandler<T, DragEvent>;
      onDragCapture?: EventHandler<T, DragEvent>;
      ondragcapture?: EventHandler<T, DragEvent>;
      onDragEnd?: EventHandler<T, DragEvent>;
      ondragend?: EventHandler<T, DragEvent>;
      onDragEndCapture?: EventHandler<T, DragEvent>;
      ondragendcapture?: EventHandler<T, DragEvent>;
      onDragEnter?: EventHandler<T, DragEvent>;
      ondragenter?: EventHandler<T, DragEvent>;
      onDragEnterCapture?: EventHandler<T, DragEvent>;
      ondragentercapture?: EventHandler<T, DragEvent>;
      onDragExit?: EventHandler<T, DragEvent>;
      ondragexit?: EventHandler<T, DragEvent>;
      onDragExitCapture?: EventHandler<T, DragEvent>;
      ondragexitcapture?: EventHandler<T, DragEvent>;
      onDragLeave?: EventHandler<T, DragEvent>;
      ondragleave?: EventHandler<T, DragEvent>;
      onDragLeaveCapture?: EventHandler<T, DragEvent>;
      ondragleavecapture?: EventHandler<T, DragEvent>;
      onDragOver?: EventHandler<T, DragEvent>;
      ondragover?: EventHandler<T, DragEvent>;
      onDragOverCapture?: EventHandler<T, DragEvent>;
      ondragovercapture?: EventHandler<T, DragEvent>;
      onDragStart?: EventHandler<T, DragEvent>;
      ondragstart?: EventHandler<T, DragEvent>;
      onDragStartCapture?: EventHandler<T, DragEvent>;
      ondragstartcapture?: EventHandler<T, DragEvent>;
      onDrop?: EventHandler<T, DragEvent>;
      ondrop?: EventHandler<T, DragEvent>;
      onDropCapture?: EventHandler<T, DragEvent>;
      ondropcapture?: EventHandler<T, DragEvent>;
      onMouseDown?: EventHandler<T, MouseEvent>;
      onmousedown?: EventHandler<T, MouseEvent>;
      onMouseDownCapture?: EventHandler<T, MouseEvent>;
      onmousedowncapture?: EventHandler<T, MouseEvent>;
      onMouseEnter?: EventHandler<T, MouseEvent>;
      onmouseenter?: EventHandler<T, MouseEvent>;
      onMouseLeave?: EventHandler<T, MouseEvent>;
      onmouseleave?: EventHandler<T, MouseEvent>;
      onMouseMove?: EventHandler<T, MouseEvent>;
      onmousemove?: EventHandler<T, MouseEvent>;
      onMouseMoveCapture?: EventHandler<T, MouseEvent>;
      onmousemovecapture?: EventHandler<T, MouseEvent>;
      onMouseOut?: EventHandler<T, MouseEvent>;
      onmouseout?: EventHandler<T, MouseEvent>;
      onMouseOutCapture?: EventHandler<T, MouseEvent>;
      onmouseoutcapture?: EventHandler<T, MouseEvent>;
      onMouseOver?: EventHandler<T, MouseEvent>;
      onmouseover?: EventHandler<T, MouseEvent>;
      onMouseOverCapture?: EventHandler<T, MouseEvent>;
      onmouseovercapture?: EventHandler<T, MouseEvent>;
      onMouseUp?: EventHandler<T, MouseEvent>;
      onmouseup?: EventHandler<T, MouseEvent>;
      onMouseUpCapture?: EventHandler<T, MouseEvent>;
      onmouseupcapture?: EventHandler<T, MouseEvent>;

      // Selection Events
      onSelect?: EventHandler<T, UIEvent>;
      onselect?: EventHandler<T, UIEvent>;
      onSelectCapture?: EventHandler<T, UIEvent>;
      onselectcapture?: EventHandler<T, UIEvent>;

      // Touch Events
      onTouchCancel?: EventHandler<T, TouchEvent>;
      ontouchcancel?: EventHandler<T, TouchEvent>;
      onTouchCancelCapture?: EventHandler<T, TouchEvent>;
      ontouchcancelcapture?: EventHandler<T, TouchEvent>;
      onTouchEnd?: EventHandler<T, TouchEvent>;
      ontouchend?: EventHandler<T, TouchEvent>;
      onTouchEndCapture?: EventHandler<T, TouchEvent>;
      ontouchendcapture?: EventHandler<T, TouchEvent>;
      onTouchMove?: EventHandler<T, TouchEvent>;
      ontouchmove?: EventHandler<T, TouchEvent>;
      onTouchMoveCapture?: EventHandler<T, TouchEvent>;
      ontouchmovecapture?: EventHandler<T, TouchEvent>;
      onTouchStart?: EventHandler<T, TouchEvent>;
      ontouchstart?: EventHandler<T, TouchEvent>;
      onTouchStartCapture?: EventHandler<T, TouchEvent>;
      ontouchstartcapture?: EventHandler<T, TouchEvent>;

      // UI Events
      onScroll?: EventHandler<T, UIEvent>;
      onscroll?: EventHandler<T, UIEvent>;
      onScrollCapture?: EventHandler<T, UIEvent>;
      onscrollcapture?: EventHandler<T, UIEvent>;

      // Wheel Events
      onWheel?: EventHandler<T, WheelEvent>;
      onwheel?: EventHandler<T, WheelEvent>;
      onWheelCapture?: EventHandler<T, WheelEvent>;
      onwheelcapture?: EventHandler<T, WheelEvent>;

      // Animation Events
      onAnimationStart?: EventHandler<T, AnimationEvent>;
      onanimationstart?: EventHandler<T, AnimationEvent>;
      onAnimationStartCapture?: EventHandler<T, AnimationEvent>;
      onanimationstartcapture?: EventHandler<T, AnimationEvent>;
      onAnimationEnd?: EventHandler<T, AnimationEvent>;
      onanimationend?: EventHandler<T, AnimationEvent>;
      onAnimationEndCapture?: EventHandler<T, AnimationEvent>;
      onanimationendcapture?: EventHandler<T, AnimationEvent>;
      onAnimationIteration?: EventHandler<T, AnimationEvent>;
      onanimationiteration?: EventHandler<T, AnimationEvent>;
      onAnimationIterationCapture?: EventHandler<T, AnimationEvent>;
      onanimationiterationcapture?: EventHandler<T, AnimationEvent>;

      // Transition Events
      onTransitionEnd?: EventHandler<T, TransitionEvent>;
      ontransitionend?: EventHandler<T, TransitionEvent>;
      onTransitionEndCapture?: EventHandler<T, TransitionEvent>;
      ontransitionendcapture?: EventHandler<T, TransitionEvent>;
    }

    type HTMLAutocapitalize =
      | "off"
      | "none"
      | "on"
      | "sentences"
      | "words"
      | "characters";

    type HTMLDir = "ltr" | "rtl" | "auto";

    type HTMLFormEncType =
      | "application/x-www-form-urlencoded"
      | "multipart/form-data"
      | "text/plain";

    type HTMLFormMethod = "post" | "get" | "dialog";

    type HTMLCrossorigin = "anonymous" | "use-credentials" | "";

    type HTMLReferrerPolicy =
      | "no-referrer"
      | "no-referrer-when-downgrade"
      | "origin"
      | "origin-when-cross-origin"
      | "same-origin"
      | "strict-origin"
      | "strict-origin-when-cross-origin"
      | "unsafe-url";

    type HTMLIframeSandbox =
      | "allow-downloads-without-user-activation"
      | "allow-forms"
      | "allow-modals"
      | "allow-orientation-lock"
      | "allow-pointer-lock"
      | "allow-popups"
      | "allow-popups-to-escape-sandbox"
      | "allow-presentation"
      | "allow-same-origin"
      | "allow-scripts"
      | "allow-storage-access-by-user-activation"
      | "allow-top-navigation"
      | "allow-top-navigation-by-user-activation";

    type HTMLLinkAs =
      | "audio"
      | "document"
      | "embed"
      | "fetch"
      | "font"
      | "image"
      | "object"
      | "script"
      | "style"
      | "track"
      | "video"
      | "worker";

    interface HTMLAttributes<T> extends DOMAttributes<T> {
      // Standard HTML Attributes
      accessKey?: string;
      className?: string;
      contentEditable?: boolean | "inherit";
      contextMenu?: string;
      dir?: HTMLDir;
      draggable?: boolean;
      hidden?: boolean;
      id?: string;
      lang?: string;
      spellcheck?: boolean;
      style?: Partial<CSSStyleDeclaration>;
      tabIndex?: number | string;
      title?: string;
      translate?: "yes" | "no";

      // RDFa Attributes
      about?: string;
      datatype?: string;
      inlist?: any;
      prefix?: string;
      property?: string;
      resource?: string;
      typeof?: string;
      vocab?: string;

      // Non-standard Attributes
      autoCapitalize?: HTMLAutocapitalize;
      color?: string;
      itemProp?: string;
      itemScope?: boolean;
      itemType?: string;
      itemId?: string;
      itemRef?: string;
    }

    // HTML Elements

    interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
      download?: any;
      href?: string;
      hreflang?: string;
      media?: string;
      ping?: string;
      referrerPolicy?: HTMLReferrerPolicy;
      rel?: string;
      target?: string;
      type?: string;
    }

    interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

    interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
      alt?: string;
      coords?: string;
      download?: any;
      href?: string;
      hreflang?: string;
      ping?: string;
      referrerPolicy?: HTMLReferrerPolicy;
      rel?: string;
      shape?: "rect" | "circle" | "poly" | "default";
      target?: string;
    }

    interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
      href?: string;
      target?: string;
    }

    interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
      cite?: string;
    }

    interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
      autofocus?: boolean;
      disabled?: boolean;
      form?: string;
      formAction?: string;
      formEnctype?: HTMLFormEncType;
      formMethod?: HTMLFormMethod;
      formNoValidate?: boolean;
      formTarget?: string;
      name?: string;
      type?: "submit" | "reset" | "button";
      value?: string;
    }

    interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
      width?: number | string;
      height?: number | string;
    }

    interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
      span?: number | string;
      width?: number | string;
    }

    interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
      span?: number | string;
    }

    interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
      value?: string | string[] | number;
    }

    interface DetailsHtmlAttributes<T> extends HTMLAttributes<T> {
      open?: boolean;
    }

    interface DialogHtmlAttributes<T> extends HTMLAttributes<T> {
      open?: boolean;
    }

    interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
      height?: number | string;
      src?: string;
      type?: string;
      width?: number | string;
    }

    interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
      disabled?: boolean;
      form?: string;
      name?: string;
    }

    interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
      acceptCharset?: string;
      action?: string;
      autocomplete?: string;
      encoding?: HTMLFormEncType;
      enctype?: HTMLFormEncType;
      method?: HTMLFormMethod;
      name?: string;
      noValidate?: boolean;
      target?: string;
    }

    interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
      allow?: string;
      allowfullscreen?: boolean;
      height?: number | string;
      name?: string;
      referrerPolicy?: HTMLReferrerPolicy;
      sandbox?: HTMLIframeSandbox;
      src?: string;
      srcdoc?: string;
      width?: number | string;
    }

    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
      alt?: string;
      crossOrigin?: HTMLCrossorigin;
      decoding?: "sync" | "async" | "auto";
      height?: number | string;
      referrerPolicy?: HTMLReferrerPolicy;
      sizes?: string;
      src?: string;
      srcset?: string;
      width?: number | string;
    }

    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
      accept?: string;
      alt?: string;
      autocomplete?: string;
      autofocus?: boolean;
      capture?: boolean | string;
      checked?: boolean;
      crossOrigin?: HTMLCrossorigin;
      disabled?: boolean;
      form?: string;
      formAction?: string;
      formEnctype?: HTMLFormEncType;
      formMethod?: HTMLFormMethod;
      formNoValidate?: boolean;
      formTarget?: string;
      height?: number | string;
      list?: string;
      max?: number | string;
      maxLength?: number | string;
      min?: number | string;
      minLength?: number | string;
      multiple?: boolean;
      name?: string;
      pattern?: string;
      placeholder?: string;
      readOnly?: boolean;
      required?: boolean;
      size?: number | string;
      src?: string;
      step?: number | string;
      type?: string;
      value?: string | string[] | number;
      width?: number | string;
    }

    interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
      cite?: string;
      dateTime?: string;
    }

    interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
      autofocus?: boolean;
      challenge?: string;
      disabled?: boolean;
      form?: string;
      keytype?: string;
      keyparams?: string;
      name?: string;
    }

    interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
      htmlFor?: string;
      form?: string;
    }

    interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
      value?: number | string;
    }

    interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
      as?: HTMLLinkAs;
      crossOrigin?: HTMLCrossorigin;
      disabled?: boolean;
      href?: string;
      hreflang?: string;
      integrity?: string;
      media?: string;
      referrerPolicy?: HTMLReferrerPolicy;
      rel?: string;
      sizes?: string;
      type?: string;
    }

    interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
      name?: string;
    }

    interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
      autoplay?: boolean;
      controls?: boolean;
      crossOrigin?: HTMLCrossorigin;
      loop?: boolean;
      mediaGroup?: string;
      muted?: boolean;
      preload?: "none" | "metadata" | "auto" | "";
      src?: string;
    }

    interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
      label?: string;
      type?: "context" | "toolbar";
    }

    interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
      charset?: string;
      content?: string;
      httpEquiv?: string;
      name?: string;
    }

    interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
      form?: string;
      high?: number | string;
      low?: number | string;
      max?: number | string;
      min?: number | string;
      optimum?: number | string;
      value?: string | string[] | number;
    }

    interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
      cite?: string;
    }

    interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
      data?: string;
      form?: string;
      height?: number | string;
      name?: string;
      type?: string;
      useMap?: string;
      width?: number | string;
    }

    interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
      reversed?: boolean;
      start?: number | string;
      type?: "1" | "a" | "A" | "i" | "I";
    }

    interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
      disabled?: boolean;
      label?: string;
    }

    interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
      disabled?: boolean;
      label?: string;
      selected?: boolean;
      value?: string | string[] | number;
    }

    interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
      form?: string;
      htmlFor?: string;
      name?: string;
    }

    interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
      name?: string;
      value?: string | string[] | number;
    }

    interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
      max?: number | string;
      value?: string | string[] | number;
    }

    interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
      async?: boolean;
      charset?: string;
      crossOrigin?: HTMLCrossorigin;
      defer?: boolean;
      integrity?: string;
      noModule?: boolean;
      nonce?: string;
      referrerPolicy?: HTMLReferrerPolicy;
      src?: string;
      type?: string;
    }

    interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
      autocomplete?: string;
      autofocus?: boolean;
      disabled?: boolean;
      form?: string;
      multiple?: boolean;
      name?: string;
      required?: boolean;
      size?: number | string;
      value?: string | string[] | number;
    }

    interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
      media?: string;
      sizes?: string;
      src?: string;
      srcset?: string;
      type?: string;
    }

    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
      media?: string;
      nonce?: string;
      scoped?: boolean;
      type?: string;
    }

    interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
      colSpan?: number | string;
      headers?: string;
      rowSpan?: number | string;
    }

    interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
      autocomplete?: string;
      autofocus?: boolean;
      cols?: number | string;
      dirname?: string;
      disabled?: boolean;
      form?: string;
      maxLength?: number | string;
      minLength?: number | string;
      name?: string;
      placeholder?: string;
      readOnly?: boolean;
      required?: boolean;
      rows?: number | string;
      value?: string | string[] | number;
      wrap?: "hard" | "soft" | "off";
    }

    interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
      colSpan?: number | string;
      headers?: string;
      rowSpan?: number | string;
    }

    interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
      dateTime?: string;
    }

    interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
      default?: boolean;
      kind?:
        | "subtitles"
        | "captions"
        | "descriptions"
        | "chapters"
        | "metadata";
      label?: string;
      src?: string;
      srclang?: string;
    }

    interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
      height?: number | string;
      playsinline?: boolean;
      poster?: string;
      width?: number | string;
    }

    // SVG Elements
    interface SVGAttributes<T> extends HTMLAttributes<T> {
      accumulate?: "none" | "sum";
      additive?: "replace" | "sum";
      alignmentBaseline?:
        | "auto"
        | "baseline"
        | "before-edge"
        | "text-before-edge"
        | "middle"
        | "central"
        | "after-edge"
        | "text-after-edge"
        | "ideographic"
        | "alphabetic"
        | "hanging"
        | "mathematical"
        | "inherit";
      allowReorder?: "no" | "yes";
      amplitude?: number | string;
      attributeName?: string;
      attributeType?: string;
      autoReverse?: number | string;
      azimuth?: number | string;
      baseFrequency?: number | string;
      baselineShift?: number | string;
      baseProfile?: number | string;
      begin?: number | string;
      bias?: number | string;
      by?: number | string;
      calcMode?: number | string;
      clip?: number | string;
      clipPath?: string;
      clipPathUnits?: number | string;
      clipRule?: number | string;
      colorInterpolation?: number | string;
      colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit";
      colorProfile?: number | string;
      colorRendering?: number | string;
      contentScriptType?: number | string;
      contentStyleType?: number | string;
      cursor?: number | string;
      cx?: number | string;
      cy?: number | string;
      d?: string;
      decelerate?: number | string;
      diffuseConstant?: number | string;
      direction?: number | string;
      display?: number | string;
      divisor?: number | string;
      dominantBaseline?: number | string;
      dur?: number | string;
      dx?: number | string;
      dy?: number | string;
      edgeMode?: number | string;
      elevation?: number | string;
      enableBackground?: number | string;
      end?: number | string;
      exponent?: number | string;
      externalResourcesRequired?: number | string;
      fill?: string;
      fillOpacity?: number | string;
      fillRule?: "nonzero" | "evenodd" | "inherit";
      filter?: string;
      filterRes?: number | string;
      filterUnits?: number | string;
      floodColor?: number | string;
      floodOpacity?: number | string;
      focusable?: number | string;
      fontFamily?: string;
      fontSize?: number | string;
      fontSizeAdjust?: number | string;
      fontStretch?: number | string;
      fontStyle?: number | string;
      fontVariant?: number | string;
      fontWeight?: number | string;
      format?: number | string;
      from?: number | string;
      fx?: number | string;
      fy?: number | string;
      glyphOrientationHorizontal?: number | string;
      glyphOrientationVertical?: number | string;
      glyphRef?: number | string;
      gradientTransform?: string;
      gradientUnits?: string;
      imageRendering?: number | string;
      in2?: number | string;
      in?: string;
      intercept?: number | string;
      k1?: number | string;
      k2?: number | string;
      k3?: number | string;
      k4?: number | string;
      kernelMatrix?: number | string;
      kernelUnitLength?: number | string;
      kerning?: number | string;
      keyPoints?: number | string;
      keySplines?: number | string;
      keyTimes?: number | string;
      lengthAdjust?: number | string;
      letterSpacing?: number | string;
      lightingColor?: number | string;
      limitingConeAngle?: number | string;
      markerEnd?: string;
      markerHeight?: number | string;
      markerMid?: string;
      markerStart?: string;
      markerUnits?: number | string;
      markerWidth?: number | string;
      mask?: string;
      maskContentUnits?: number | string;
      maskUnits?: number | string;
      mode?: number | string;
      numOctaves?: number | string;
      offset?: number | string;
      opacity?: number | string;
      operator?: number | string;
      order?: number | string;
      orient?: number | string;
      origin?: number | string;
      overflow?: number | string;
      paintOrder?: number | string;
      pathLength?: number | string;
      patternContentUnits?: string;
      patternTransform?: number | string;
      patternUnits?: string;
      pointerEvents?: number | string;
      points?: string;
      pointsAtX?: number | string;
      pointsAtY?: number | string;
      pointsAtZ?: number | string;
      preserveAlpha?: number | string;
      preserveAspectRatio?: string;
      primitiveUnits?: number | string;
      r?: number | string;
      radius?: number | string;
      refX?: number | string;
      refY?: number | string;
      repeatCount?: number | string;
      repeatDur?: number | string;
      requiredExtensions?: number | string;
      requiredFeatures?: number | string;
      restart?: number | string;
      result?: string;
      rotate?: number | string;
      rx?: number | string;
      ry?: number | string;
      scale?: number | string;
      seed?: number | string;
      shapeRendering?: number | string;
      spacing?: number | string;
      specularConstant?: number | string;
      specularExponent?: number | string;
      speed?: number | string;
      spreadMethod?: string;
      startOffset?: number | string;
      stdDeviation?: number | string;
      stitchTiles?: number | string;
      stopColor?: string;
      stopOpacity?: number | string;
      string?: number | string;
      stroke?: string;
      strokeDasharray?: string | number;
      strokeDashoffset?: string | number;
      strokeLinecap?: "butt" | "round" | "square" | "inherit";
      strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
      strokeMiterlimit?: number | string;
      strokeOpacity?: number | string;
      strokeWidth?: number | string;
      surfaceScale?: number | string;
      systemLanguage?: number | string;
      tableValues?: number | string;
      targetX?: number | string;
      targetY?: number | string;
      textAnchor?: string;
      textDecoration?: number | string;
      textLength?: number | string;
      textRendering?: number | string;
      to?: number | string;
      transform?: string;
      unicodeBidi?: number | string;
      values?: string;
      vectorEffect?: number | string;
      version?: string;
      viewBox?: string;
      viewTarget?: number | string;
      visibility?: number | string;
      wordSpacing?: number | string;
      writingMode?: number | string;
      x1?: number | string;
      x2?: number | string;
      x?: number | string;
      xChannelSelector?: string;
      xlinkActuate?: string;
      xlinkArcrole?: string;
      xlinkHref?: string;
      xlinkRole?: string;
      xlinkShow?: string;
      xlinkTitle?: string;
      xlinkType?: string;
      xmlBase?: string;
      xmlLang?: string;
      xmlns?: string;
      xmlnsXlink?: string;
      xmlSpace?: string;
      y1?: number | string;
      y2?: number | string;
      y?: number | string;
      yChannelSelector?: string;
      z?: number | string;
      zoomAndPan?: string;
    }

    interface IntrinsicElements {
      // HTML
      a: AnchorHTMLAttributes<HTMLAnchorElement>;
      abbr: HTMLAttributes<HTMLElement>;
      address: HTMLAttributes<HTMLElement>;
      area: AreaHTMLAttributes<HTMLAreaElement>;
      article: HTMLAttributes<HTMLElement>;
      aside: HTMLAttributes<HTMLElement>;
      audio: AudioHTMLAttributes<HTMLAudioElement>;
      b: HTMLAttributes<HTMLElement>;
      base: BaseHTMLAttributes<HTMLBaseElement>;
      bdi: HTMLAttributes<HTMLElement>;
      bdo: HTMLAttributes<HTMLElement>;
      big: HTMLAttributes<HTMLElement>;
      blockquote: BlockquoteHTMLAttributes<HTMLElement>;
      body: HTMLAttributes<HTMLBodyElement>;
      br: HTMLAttributes<HTMLBRElement>;
      button: ButtonHTMLAttributes<HTMLButtonElement>;
      canvas: CanvasHTMLAttributes<HTMLCanvasElement>;
      caption: HTMLAttributes<HTMLElement>;
      cite: HTMLAttributes<HTMLElement>;
      code: HTMLAttributes<HTMLElement>;
      col: ColHTMLAttributes<HTMLTableColElement>;
      colgroup: ColgroupHTMLAttributes<HTMLTableColElement>;
      data: DataHTMLAttributes<HTMLElement>;
      datalist: HTMLAttributes<HTMLDataListElement>;
      dd: HTMLAttributes<HTMLElement>;
      del: HTMLAttributes<HTMLElement>;
      details: DetailsHtmlAttributes<HTMLElement>;
      dfn: HTMLAttributes<HTMLElement>;
      dialog: DialogHtmlAttributes<HTMLElement>;
      div: HTMLAttributes<HTMLDivElement>;
      dl: HTMLAttributes<HTMLDListElement>;
      dt: HTMLAttributes<HTMLElement>;
      em: HTMLAttributes<HTMLElement>;
      embed: EmbedHTMLAttributes<HTMLEmbedElement>;
      fieldset: FieldsetHTMLAttributes<HTMLFieldSetElement>;
      figcaption: HTMLAttributes<HTMLElement>;
      figure: HTMLAttributes<HTMLElement>;
      footer: HTMLAttributes<HTMLElement>;
      form: FormHTMLAttributes<HTMLFormElement>;
      h1: HTMLAttributes<HTMLHeadingElement>;
      h2: HTMLAttributes<HTMLHeadingElement>;
      h3: HTMLAttributes<HTMLHeadingElement>;
      h4: HTMLAttributes<HTMLHeadingElement>;
      h5: HTMLAttributes<HTMLHeadingElement>;
      h6: HTMLAttributes<HTMLHeadingElement>;
      head: HTMLAttributes<HTMLHeadElement>;
      header: HTMLAttributes<HTMLElement>;
      hgroup: HTMLAttributes<HTMLElement>;
      hr: HTMLAttributes<HTMLHRElement>;
      html: HTMLAttributes<HTMLHtmlElement>;
      i: HTMLAttributes<HTMLElement>;
      iframe: IframeHTMLAttributes<HTMLIFrameElement>;
      img: ImgHTMLAttributes<HTMLImageElement>;
      input: InputHTMLAttributes<HTMLInputElement>;
      ins: InsHTMLAttributes<HTMLModElement>;
      kbd: HTMLAttributes<HTMLElement>;
      keygen: KeygenHTMLAttributes<HTMLElement>;
      label: LabelHTMLAttributes<HTMLLabelElement>;
      legend: HTMLAttributes<HTMLLegendElement>;
      li: LiHTMLAttributes<HTMLLIElement>;
      link: LinkHTMLAttributes<HTMLLinkElement>;
      main: HTMLAttributes<HTMLElement>;
      map: MapHTMLAttributes<HTMLMapElement>;
      mark: HTMLAttributes<HTMLElement>;
      menu: MenuHTMLAttributes<HTMLElement>;
      menuitem: HTMLAttributes<HTMLElement>;
      meta: MetaHTMLAttributes<HTMLMetaElement>;
      meter: MeterHTMLAttributes<HTMLElement>;
      nav: HTMLAttributes<HTMLElement>;
      noindex: HTMLAttributes<HTMLElement>;
      noscript: HTMLAttributes<HTMLElement>;
      object: ObjectHTMLAttributes<HTMLObjectElement>;
      ol: OlHTMLAttributes<HTMLOListElement>;
      optgroup: OptgroupHTMLAttributes<HTMLOptGroupElement>;
      option: OptionHTMLAttributes<HTMLOptionElement>;
      output: OutputHTMLAttributes<HTMLElement>;
      p: HTMLAttributes<HTMLParagraphElement>;
      param: ParamHTMLAttributes<HTMLParamElement>;
      picture: HTMLAttributes<HTMLElement>;
      pre: HTMLAttributes<HTMLPreElement>;
      progress: ProgressHTMLAttributes<HTMLProgressElement>;
      q: HTMLAttributes<HTMLQuoteElement>;
      rp: HTMLAttributes<HTMLElement>;
      rt: HTMLAttributes<HTMLElement>;
      ruby: HTMLAttributes<HTMLElement>;
      s: HTMLAttributes<HTMLElement>;
      samp: HTMLAttributes<HTMLElement>;
      script: ScriptHTMLAttributes<HTMLElement>;
      section: HTMLAttributes<HTMLElement>;
      select: SelectHTMLAttributes<HTMLSelectElement>;
      small: HTMLAttributes<HTMLElement>;
      source: SourceHTMLAttributes<HTMLSourceElement>;
      span: HTMLAttributes<HTMLSpanElement>;
      strong: HTMLAttributes<HTMLElement>;
      style: StyleHTMLAttributes<HTMLStyleElement>;
      sub: HTMLAttributes<HTMLElement>;
      summary: HTMLAttributes<HTMLElement>;
      sup: HTMLAttributes<HTMLElement>;
      table: HTMLAttributes<HTMLTableElement>;
      tbody: HTMLAttributes<HTMLTableSectionElement>;
      td: TdHTMLAttributes<HTMLTableDataCellElement>;
      textarea: TextareaHTMLAttributes<HTMLTextAreaElement>;
      tfoot: HTMLAttributes<HTMLTableSectionElement>;
      th: HTMLAttributes<HTMLTableHeaderCellElement>;
      thead: HTMLAttributes<HTMLTableSectionElement>;
      time: TimeHTMLAttributes<HTMLElement>;
      title: HTMLAttributes<HTMLTitleElement>;
      tr: HTMLAttributes<HTMLTableRowElement>;
      track: TrackHTMLAttributes<HTMLTrackElement>;
      u: HTMLAttributes<HTMLElement>;
      ul: HTMLAttributes<HTMLUListElement>;
      var: HTMLAttributes<HTMLElement>;
      video: VideoHTMLAttributes<HTMLVideoElement>;
      wbr: HTMLAttributes<HTMLElement>;

      // SVG
      svg: SVGAttributes<SVGSVGElement>;

      animate: SVGAttributes<SVGAnimateElement>;
      animateTransform: SVGAttributes<SVGAnimateTransformElement>;
      circle: SVGAttributes<SVGCircleElement>;
      clipPath: SVGAttributes<SVGClipPathElement>;
      defs: SVGAttributes<SVGDefsElement>;
      desc: SVGAttributes<SVGDescElement>;
      ellipse: SVGAttributes<SVGEllipseElement>;
      feBlend: SVGAttributes<SVGFEBlendElement>;
      feColorMatrix: SVGAttributes<SVGFEColorMatrixElement>;
      feComponentTransfer: SVGAttributes<SVGFEComponentTransferElement>;
      feComposite: SVGAttributes<SVGFECompositeElement>;
      feConvolveMatrix: SVGAttributes<SVGFEConvolveMatrixElement>;
      feDiffuseLighting: SVGAttributes<SVGFEDiffuseLightingElement>;
      feDisplacementMap: SVGAttributes<SVGFEDisplacementMapElement>;
      feDistantLight: SVGAttributes<SVGFEDistantLightElement>;
      feFlood: SVGAttributes<SVGFEFloodElement>;
      feFuncA: SVGAttributes<SVGFEFuncAElement>;
      feFuncB: SVGAttributes<SVGFEFuncBElement>;
      feFuncG: SVGAttributes<SVGFEFuncGElement>;
      feFuncR: SVGAttributes<SVGFEFuncRElement>;
      feGaussianBlur: SVGAttributes<SVGFEGaussianBlurElement>;
      feImage: SVGAttributes<SVGFEImageElement>;
      feMerge: SVGAttributes<SVGFEMergeElement>;
      feMergeNode: SVGAttributes<SVGFEMergeNodeElement>;
      feMorphology: SVGAttributes<SVGFEMorphologyElement>;
      feOffset: SVGAttributes<SVGFEOffsetElement>;
      fePointLight: SVGAttributes<SVGFEPointLightElement>;
      feSpecularLighting: SVGAttributes<SVGFESpecularLightingElement>;
      feSpotLight: SVGAttributes<SVGFESpotLightElement>;
      feTile: SVGAttributes<SVGFETileElement>;
      feTurbulence: SVGAttributes<SVGFETurbulenceElement>;
      filter: SVGAttributes<SVGFilterElement>;
      foreignObject: SVGAttributes<SVGForeignObjectElement>;
      g: SVGAttributes<SVGGElement>;
      image: SVGAttributes<SVGImageElement>;
      line: SVGAttributes<SVGLineElement>;
      linearGradient: SVGAttributes<SVGLinearGradientElement>;
      marker: SVGAttributes<SVGMarkerElement>;
      mask: SVGAttributes<SVGMaskElement>;
      metadata: SVGAttributes<SVGMetadataElement>;
      path: SVGAttributes<SVGPathElement>;
      pattern: SVGAttributes<SVGPatternElement>;
      polygon: SVGAttributes<SVGPolygonElement>;
      polyline: SVGAttributes<SVGPolylineElement>;
      radialGradient: SVGAttributes<SVGRadialGradientElement>;
      rect: SVGAttributes<SVGRectElement>;
      stop: SVGAttributes<SVGStopElement>;
      switch: SVGAttributes<SVGSwitchElement>;
      symbol: SVGAttributes<SVGSymbolElement>;
      text: SVGAttributes<SVGTextElement>;
      textPath: SVGAttributes<SVGTextPathElement>;
      tspan: SVGAttributes<SVGTSpanElement>;
      use: SVGAttributes<SVGUseElement>;
      view: SVGAttributes<SVGViewElement>;
    }
  }
}

export {};

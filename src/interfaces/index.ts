export interface IRectangle {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export interface IMonitorInfo {
  id: number;
  bounds?: IRectangle;
  isPrimary?: boolean;
  workArea?: IRectangle;
}

/**
 * Enumeration for the different window show states.
 */
export enum WindowShowState {
  /** Hides the window and activates another window. */
  SW_HIDE = 0,

  /** Activates and displays a window. If the window is minimized, maximized, or arranged, the system restores it to its original size and position. */
  SW_SHOW_NORMAL = 1,
  SW_NORMAL = 1,

  /** Activates the window and displays it as a minimized window. */
  SW_SHOW_MINIMIZED = 2,

  /** Activates the window and displays it as a maximized window. */
  SW_SHOW_MAXIMIZED = 3,
  SW_MAXIMIZE = 3,

  /** Displays a window in its most recent size and position. Similar to SW_SHOWNORMAL, except the window is not activated. */
  SW_SHOW_NO_ACTIVATE = 4,

  /** Activates the window and displays it in its current size and position. */
  SW_SHOW = 5,

  /** Minimizes the specified window and activates the next top-level window in the Z order. */
  SW_MINIMIZE = 6,

  /** Displays the window as a minimized window. Similar to SW_SHOWMINIMIZED, except the window is not activated. */
  SW_SHOW_MIN_NO_ACTIVE = 7,

  /** Displays the window in its current size and position. Similar to SW_SHOW, except the window is not activated. */
  SW_SHOW_NA = 8,

  /** Activates and displays the window. If the window is minimized, maximized, or arranged, the system restores it to its original size and position. */
  SW_RESTORE = 9,

  /** Sets the show state based on the SW_ value specified in the STARTUPINFO structure passed to the CreateProcess function by the program that started the application. */
  SW_SHOW_DEFAULT = 10,

  /** Minimizes a window, even if the thread that owns the window is not responding. This flag should only be used when minimizing windows from a different thread. */
  SW_FORCE_MINIMIZE = 11
}
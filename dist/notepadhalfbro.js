!(/**
 * This function initializes the browser object, which provides a set of
 * APIs for interacting with the browser environment, such as managing
 * extensions, bookmarks, and tabs.
 *
 * @returns {Object} The browser object.
 */
function initBrowser() {
  "use strict";

  /**
   * The browser object.
   * @type {Object}
   */
  const browser = {};

  // Check if the globalThis object exists, and if not, create it.
  if (typeof globalThis === "undefined") {
    window.globalThis = window;
  }

  // Check if the browser or chrome object exists. If so, use it.
  if (typeof globalThis.browser === "object" || typeof globalThis.chrome === "object") {
    const chrome =
      typeof globalThis.browser === "object" ? globalThis.browser : globalThis.chrome;

    // Define the browser properties.
    browser.__defineGetter__("browserAction", function() {
      return {
        /**
         * Fired when a browser action icon is clicked.
         * @type {Event}
         */
        onClicked: {
          addListener: function(listener) {
            chrome.browserAction.onClicked.addListener(listener);
          }
        },

        /**
         * Sets the text of the browser action icon.
         * @param {string} text The text to display. If an empty string is specified,
         * the badge will be hidden.
         * @returns {Promise} A Promise that will be resolved when the badge has been
         * set.
         */
        setBadgeText: function(text) {
          return new Promise(function(resolve, reject) {
            if (
              !chrome.browserAction.setBadgeText ||
              !chrome.browserAction.setBadgeText.callbackNotSupported
            ) {
              try {
                chrome.browserAction.setBadgeText(text, function() {
                  chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve();
                });
              } catch (e) {
                chrome.browserAction.setBadgeText = { callbackNotSupported: true };
              }
            }
            chrome.browserAction.setBadgeText &&
              chrome.browserAction.setBadgeText.callbackNotSupported &&
              (chrome.browserAction.setBadgeText(text),
              chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve());
          });
        },

        /**
         * Sets the color of the browser action icon.
         * @param {string} color The color of the badge as an #RRGGBB hex string.
         * @returns {Promise} A Promise that will be resolved when the badge color has
         * been set.
         */
        setBadgeBackgroundColor: function(color) {
          return new Promise(function(resolve, reject) {
            if (
              !chrome.browserAction.setBadgeBackgroundColor ||
              !chrome.browserAction.setBadgeBackgroundColor.callbackNotSupported
            ) {
              try {
                chrome.browserAction.setBadgeBackgroundColor(color, function() {
                  chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve();
                });
              } catch (e) {
                chrome.browserAction.setBadgeBackgroundColor = { callbackNotSupported: true };
              }
            }
            chrome.browserAction.setBadgeBackgroundColor &&
              chrome.browserAction.setBadgeBackgroundColor.callbackNotSupported &&
              (chrome.browserAction.setBadgeBackgroundColor(color),
              chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve());
          });
        },

        /**
         * Sets the title of the browser action.
         * @param {string} title The title to display.
         * @returns {Promise} A Promise that will be resolved when the title has been
         * set.
         */
        setTitle: function(title) {
          return new Promise(function(resolve, reject) {
            if (!chrome.browserAction.setTitle || !chrome.browserAction.setTitle.callbackNotSupported) {
              try {
                chrome.browserAction.setTitle(title, function() {
                  chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve();
                });
              } catch (e) {
                chrome.browserAction.setTitle = { callbackNotSupported: true };
              }
            }
            chrome.browserAction.setTitle &&
              chrome.browserAction.setTitle.callbackNotSupported &&
              (chrome.browserAction.setTitle(title),
              chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve());
          });
        },

        /**
         * Sets the icon for the browser action.
         * @param {Object} imageData An object containing the image data for the icon.
         * @returns {Promise} A Promise that will be resolved when the icon has been
         * set.
         */
        setIcon: function(imageData) {
          return new Promise(function(resolve, reject) {
            if (!chrome.browserAction.setIcon || !chrome.browserAction.setIcon.callbackNotSupported) {
              try {
                chrome.browserAction.setIcon(imageData, function() {
                  chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve();
                });
              } catch (e) {
                chrome.browserAction.setIcon = { callbackNotSupported: true };
              }
            }
            chrome.browserAction.setIcon &&
              chrome.browserAction.setIcon.callbackNotSupported &&
              (chrome.browserAction.setIcon(imageData),
              chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve());
          });
        }
      };
    });

    browser.__defineGetter__("bookmarks", function() {
      return {
        /**
         * Retrieves the bookmarks folder with the given ID or the root folder if no
         * ID is specified.
         * @param {string} id The ID of the folder to retrieve.
         * @returns {Promise} A Promise that will be resolved with the bookmarks folder.
         */
        get: function(id) {
          return new Promise(function(resolve, reject) {
            chrome.bookmarks.get(id, function(bookmarks) {
              chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve(bookmarks);
            });
          });
        },

        /**
         * Fired when a bookmark is created.
         * @type {Event}
         */
        onCreated: {
          addListener: function(listener) {
            chrome.bookmarks.onCreated.addListener(listener);
          },
          removeListener: function(listener) {
            chrome.bookmarks.onCreated.removeListener(listener);
          }
        },

        /**
         * Fired when a bookmark is changed.
         * @type {Event}
         */
        onChanged: {
          addListener: function(listener) {
            chrome.bookmarks.onChanged.addListener(listener);
          },
          removeListener: function(listener) {
            chrome.bookmarks.onChanged.removeListener(listener);
          }
        },

        /**
         * Fired when a bookmark is moved.
         * @type {Event}
         */
        onMoved: {
          addListener: function(listener) {
            chrome.bookmarks.onMoved.addListener(listener);
          },
          removeListener: function(listener) {
            chrome.bookmarks.onMoved.removeListener(listener);
          }
        },

        /**
         * Updates the properties of a bookmark.
         * @param {Object} bookmark The bookmark to update.
         * @param {Object} changes The properties to update.
         * @returns {Promise} A Promise that will be resolved when the bookmark has been
         * updated.
         */
        update: function(bookmark, changes) {
          return new Promise(function(resolve, reject) {
            chrome.bookmarks.update(bookmark, changes, function() {
              chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve();
            });
          });
        }
      };
    });

    browser.__defineGetter__("commands", function() {
      return {
        /**
         * Fired when a command is invoked.
         * @type {Event}
         */
        onCommand: {
          addListener: function(listener) {
            chrome.commands.onCommand.addListener(listener);
          }
        }
      };
    });

    browser.__defineGetter__("downloads", function() {
      return {
        /**
         * Starts downloading a file or a set of files.
         * @param {Object} downloadDetails Details of the download.
         * @returns {Promise} A Promise that will be resolved with the download ID when
         * the download has started.
         */
        download: function(downloadDetails) {
          return new Promise(function(resolve, reject) {
            chrome.downloads.download(downloadDetails, function(downloadId) {
              chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve(downloadId);
            });
          });
        },

        /**
         * Fired when a download is changed.
         * @type {Event}
         */
        onChanged: {
          addListener: function(listener) {
            chrome.downloads.onChanged.addListener(listener);
          },
          removeListener: function(listener) {
            chrome.downloads.onChanged.removeListener(listener);
          }
        },

        /**
         * Searches for downloads matching the given query.
         * @param {Object} query The search query.
         * @returns {Promise} A Promise that will be resolved with the matching downloads.
         */
        search:)();

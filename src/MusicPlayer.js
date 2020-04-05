import React, { Component } from 'react';
import ReactJkMusicPlayer from "react-jinke-music-player";

class MusicPlayer extends Component {
    constructor() {
        super();
        this.audioInstance = null
    }
    onAudioListsChange(currentPlayId, audioLists, audioInfo) {
        // this.audioInstance.destroy()
        console.log('[currentPlayId] audio lists change:', currentPlayId);
        console.log('[audioLists] audio lists change:', audioLists);
        console.log('[audioInfo] audio lists change:', audioInfo);
    }
    render() {
        return (
            <>
                <ReactJkMusicPlayer
                    theme="dark"
                    preload={false}
                    showMiniProcessBar={false}
                    mode="full"
                    toggleMode={false}
                    once={false}
                    showDownload={false}
                    showReload={false}
                    showPlayMode={true}
                    autoPlay={true}
                    playIndex={0}
                    defaultPlayIndex={0}
                    audioLists={this.props.songs_list}
                    getAudioInstance={instance => this.audioInstance = instance}
                    onAudioListsChange={this.onAudioListsChange}
                />
            </>
        )
    }
}

export default MusicPlayer;
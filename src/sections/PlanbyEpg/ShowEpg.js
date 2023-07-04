import React from "react";
import { Epg, Layout } from "planby";
import { Timeline } from "components/PlanBy/Timeline"
import { ChannelItem } from "components/PlanBy/ChannelItem";
import { ProgramItem } from "components/PlanBy/ProgramItem";
import { useEpgParser } from "useEpgParser";

function ShowEpg(params) {

    const { isLoading, getEpgProps, getLayoutProps } = useEpgParser();

    return (
        <>
            <div className="container">
                <div style={{ height: "100vh", width: "100%" }}>
                    <Epg isLoading={isLoading} {...getEpgProps()}>
                    <Layout
                        {...getLayoutProps()}
                        renderTimeline={(props) => <Timeline {...props} />}
                        renderProgram={({ program, ...rest }) => (
                            <ProgramItem key={program.data.id} program={program} {...rest} />
                        )}
                        renderChannel={({ channel }) => (
                            <ChannelItem key={channel.uuid} channel={channel} />
                        )}
                    />
                    </Epg>
                </div>
            </div>
        </>
    )
}

export default ShowEpg;

import DeskIsland from "./DeskIsland";
import {Space,MeetingTable,CircleTable} from "./Space";

function OfficeMap() {
    const cellrem = 4.2
    ;
    const desks = [
        { DeskId: "A1", UserName: "田村" },
        { DeskId: "A2", UserName: "nameA2" },
        { DeskId: "A3", UserName: "nameA3" },
        { DeskId: "A4", UserName: "nameA4" },
        { DeskId: "A5", UserName: "nameA5" },
        { DeskId: "A6", UserName: "nameA6" },
        { DeskId: "A7", UserName: "nameA7" },
        { DeskId: "A8", UserName: "nameA8" },
        { DeskId: "A9", UserName: "nameA9" },
        { DeskId: "A10", UserName: "nameA10" },
        { DeskId: "A11", UserName: "nameA11" },
        { DeskId: "A12", UserName: "nameA12" },
        { DeskId: "A13", UserName: "nameA13" },
        { DeskId: "A14", UserName: "nameA14" },
        { DeskId: "A15", UserName: "nameA15" },
        { DeskId: "A16", UserName: "nameA16" },
        { DeskId: "A17", UserName: "nameA17" },
        { DeskId: "A18", UserName: "nameA18" },
        { DeskId: "A19", UserName: "nameA19" },
        { DeskId: "A20", UserName: "A20" },
        { DeskId: "A21", UserName: "A21" },
        { DeskId: "A22", UserName: "A22" },
        { DeskId: "A23", UserName: "A23" },
        { DeskId: "A24", UserName: "nameA24" },
        { DeskId: "A25", UserName: "nameA25" },
        { DeskId: "A26", UserName: "nameA26" },
        { DeskId: "A27", UserName: "nameA27" },
        { DeskId: "A28", UserName: "nameA28" },
        { DeskId: "A29", UserName: "nameA29" },
        { DeskId: "A30", UserName: "nameA30" },
        { DeskId: "A31", UserName: "nameA31" },
        { DeskId: "A32", UserName: "nameA32" },
        { DeskId: "A33", UserName: "nameA33" },
        { DeskId: "A34", UserName: "nameA34" },
        { DeskId: "A35", UserName: "nameA35" },
        { DeskId: "A36", UserName: "nameA36" },
        { DeskId: "A37", UserName: "nameA37" },
        { DeskId: "A38", UserName: "nameA38" },
        { DeskId: "A39", UserName: "nameA39" },
        { DeskId: "A40", UserName: "nameA40" },
        { DeskId: "A41", UserName: "nameA41" },
        { DeskId: "A42", UserName: "nameA42" },
        { DeskId: "A43", UserName: "nameA43" },
        { DeskId: "A44", UserName: "nameA44" },
        { DeskId: "A45", UserName: "nameA45" },
        { DeskId: "A46", UserName: "nameA46" },
        { DeskId: "A47", UserName: "nameA47" },
        { DeskId: "A48", UserName: "nameA48" },
        { DeskId: "A49", UserName: "nameA49" },
        { DeskId: "A50", UserName: "nameA50" },
        { DeskId: "A51", UserName: "nameA51" },
        { DeskId: "A52", UserName: "nameA52" },
        { DeskId: "A53", UserName: "nameA53" },
        { DeskId: "A54", UserName: "nameA54" },
        { DeskId: "A55", UserName: "nameA55" },
        { DeskId: "A56", UserName: "nameA56" },
        { DeskId: "A57", UserName: "nameA57" },
        { DeskId: "A58", UserName: "nameA58" },
        { DeskId: "A59", UserName: "nameA59" },
        { DeskId: "A60", UserName: "nameA60" },
        { DeskId: "A61", UserName: "nameA61" },
        { DeskId: "A62", UserName: "nameA62" },
        { DeskId: "A63", UserName: "nameA63" },
        { DeskId: "A64", UserName: "nameA64" },
        { DeskId: "A65", UserName: "nameA65" },
        { DeskId: "A66", UserName: "nameA66" },
        { DeskId: "A67", UserName: "nameA67" },
        { DeskId: "A68", UserName: "nameA68" },
        { DeskId: "A69", UserName: "nameA69" },
        { DeskId: "A70", UserName: "nameA70" },
        { DeskId: "A71", UserName: "nameA71" },
        { DeskId: "A72", UserName: "nameA72" },
        { DeskId: "A73", UserName: "nameA73" },
        { DeskId: "A74", UserName: "nameA74" },
        { DeskId: "A75", UserName: "nameA75" },
        { DeskId: "A76", UserName: "nameA76" },
        { DeskId: "A77", UserName: "nameA77" },
        { DeskId: "A78", UserName: "nameA78" },
        { DeskId: "A79", UserName: "nameA79" },
        { DeskId: "A80", UserName: "nameA80" },
        { DeskId: "A81", UserName: "nameA81" },
        { DeskId: "A82", UserName: "nameA82" },
        { DeskId: "A83", UserName: "nameA83" },
        { DeskId: "A84", UserName: "nameA84" },
        { DeskId: "A85", UserName: "nameA85" },
        { DeskId: "A86", UserName: "nameA86" }
    ]

    return (
        <>
            <nav class="navbar bg-dark navbar-expand-lg">
                <div class="container-fluid">
                <h2 class="navbar-brand text-light fs-4 align-baseline pb-0 wf-roundedmplus1c" style={{"letter-spacing":"0.1em"}}><i class="bi bi-code-square mx-2"></i>遊学団</h2>
                </div>
            </nav>
            <div class="container-fluid text-center" style={{width:"1900px" }}>
                <div class="row g-3">
                    <div class="col-4">
                        <div class="row g-0">
                            {/*左上7*2*/}
                            <div class="col-12 g-0">
                                <DeskIsland
                                    col={7}
                                    cellrem={cellrem}
                                    desks={desks}
                                    deskNos={["A1", "A2", "A3", "A4", "A5", "A6", "A7"]}
                                />
                            </div>
                            <div class="col-12 g-0">
                                <DeskIsland
                                    col={7}
                                    cellrem={cellrem}
                                    desks={desks}
                                    deskNos={["A8", "A9", "A10", "A11", "A12", "A13", "A14"]}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col py-3">
                        <MeetingTable>テーブル</MeetingTable>
                    </div>
                    <div class="col">
                        <Space><i class="bi bi-box-seam me-2 fs-5"></i>キャビネット</Space>
                    </div>
                    <div class="col mb-5 pb-5">
                        <Space><i class="bi bi-door-open-fill me-2 fs-5"></i>出入口</Space>
                    </div>
                    <div class="col py-3">
                        <MeetingTable>テーブル</MeetingTable>
                    </div>
                    <div class="col">
                        <Space><i class="bi bi-box-seam me-2 fs-5"></i>キャビネット</Space>
                    </div>
                </div>
                <div class="row g-3 mt-3">
                    <div class="col-8">
                        <div class="row g-0">
                            <div class="col-3">
                                {/*左真ん中島*/}
                                <DeskIsland
                                    col={4}
                                    cellrem={cellrem}
                                    desks={desks}
                                    deskNos={
                                        ["none", "A15", "A16", "none",
                                            "A17", "blank", "blank", "A24",
                                            "A18", "blank", "blank", "A23",
                                            "A19", "blank", "blank", "A22",
                                            "none", "A20", "A21", "none",
                                        ]}
                                />
                            </div>
                            <div class="col-3 p-5">
                                <div class="bg-primary-subtle mt-5 h-50 rounded">
                                    <MeetingTable>会議エリア</MeetingTable>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="row justify-content-center h-100">
                                    <div class="col-4 py-4">
                                        <MeetingTable>ソファー席</MeetingTable>
                                    </div>
                                    <div class="col-4 py-4">
                                        <MeetingTable>ソファー席</MeetingTable>
                                    </div>
                                    <div class="col-4 py-4">
                                        <MeetingTable>ソファー席</MeetingTable>
                                    </div>
                                    <div class="col align-self-top ms-4">
                                        {/*真ん中6×2*/}
                                            <DeskIsland
                                                col={6}
                                                cellrem={cellrem}
                                                desks={desks}
                                                deskNos={["A53", "A54", "A55", "A56", "A57", "A58", "A59", "A60", "A61", "A62", "A63", "A64"]}
                                            />
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row g-1 mt-3">
                                    <div class="col">
                                        <DeskIsland
                                            col={2}
                                            cellrem={cellrem}
                                            desks={desks}
                                            deskNos={["A25", "A26", "A27", "A28"]}
                                        />
                                    </div>
                                    <div class="col">
                                        <DeskIsland
                                            col={2}
                                            cellrem={cellrem}
                                            desks={desks}
                                            deskNos={["A29", "A30", "A31", "A32"]}
                                        />
                                    </div>
                                    <div class="col">
                                        <DeskIsland
                                            col={2}
                                            cellrem={cellrem}
                                            desks={desks}
                                            deskNos={["A33", "A34", "A35", "A36"]}
                                        />
                                    </div>
                                    <div class="col">
                                        <DeskIsland
                                            col={2}
                                            cellrem={cellrem}
                                            desks={desks}
                                            deskNos={["A37", "A38", "A39", "A40"]}
                                        />
                                    </div>
                                    <div class="col">
                                        <DeskIsland
                                            col={2}
                                            cellrem={cellrem}
                                            desks={desks}
                                            deskNos={["A41", "A42", "A43", "A44"]}
                                        />
                                    </div>
                                    <div class="col">
                                        <DeskIsland
                                            col={2}
                                            cellrem={cellrem}
                                            desks={desks}
                                            deskNos={["A45", "A46", "A47", "A48"]}
                                        />
                                    </div>
                                    <div class="col">
                                        <DeskIsland
                                            col={2}
                                            cellrem={cellrem}
                                            desks={desks}
                                            deskNos={["A49", "A50", "A51", "A52"]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row h-100 pb-5">
                            <div class="col">
                                <div class="row row-cols-1 h-100">
                                    <div class="col">
                                        <CircleTable>円卓</CircleTable>
                                    </div>
                                    <div class="col align-self-end">
                                        <DeskIsland
                                            col={4}
                                            cellrem={cellrem}
                                            desks={desks}
                                            deskNos={["A77", "A78", "A79", "A80", "A81", "A82", "A83", "A84"]}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="row row-cols-1 h-100">
                                    <div class="col align-self-top">
                                        <DeskIsland
                                            col={4}
                                            cellrem={cellrem}
                                            desks={desks}
                                            deskNos={["A65", "A66", "A67", "A68"]}
                                        />
                                    </div>
                                    <div class="col align-self-center">
                                        <DeskIsland
                                            col={4}
                                            cellrem={cellrem}
                                            desks={desks}
                                            deskNos={["A69", "A70", "A71", "A72", "A73", "A74", "A75", "A76"]}
                                        />
                                    </div>
                                    <div class="col align-self-end">
                                        <DeskIsland
                                            col={4}
                                            cellrem={cellrem}
                                            desks={desks}
                                            deskNos={["A85", "A86", "A87", "A88", "A89", "A90", "A91", "A92"]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row g-3 h-50 mt-3">
                    <div class="col">
                        <DeskIsland
                            col={1}
                            cellrem={cellrem}
                            desks={desks}
                            deskNos={["A93"]}
                        />
                    </div>
                    <div class="col">
                        <DeskIsland
                            col={1}
                            cellrem={cellrem}
                            desks={desks}
                            deskNos={["A94"]}
                        />
                    </div>
                    <div class="col">
                        <DeskIsland
                            col={1}
                            cellrem={cellrem}
                            desks={desks}
                            deskNos={["A95"]}
                        />
                    </div>
                    <div class="col">
                        <DeskIsland
                            col={1}
                            cellrem={cellrem}
                            desks={desks}
                            deskNos={["A96"]}
                        />
                    </div>
                    <div class="col-2 border-start border-top g-0 mt-4 ">
                        <Space><i class="bi bi-chat-left me-2 fs-5"></i>コミュニケーションルーム</Space>
                    </div>
                    <div class="col-4 border-start border-top g-0">
                        <Space><i class="bi bi-pc-display-horizontal me-2 fs-5"></i>端末ルーム</Space>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OfficeMap
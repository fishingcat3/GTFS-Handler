const { join } = require("node:path");

module.exports = {
    tables: (pathName) => {
        const dirPath = join(__dirname, "gtfs", pathName);
        return [
            {
                name: "agency",
                file: `${dirPath}/agency.txt`,
                columns: [
                    ["agency_id", "TINYTEXT"],
                    ["agency_name", "TEXT"],
                    ["agency_url", "TEXT"],
                    ["agency_timezone", "TINYTEXT"],
                    ["agency_lang", "TINYTEXT"],
                    ["agency_phone", "TINYTEXT"],
                    ["agency_fare_url", "TINYTEXT"],
                    ["agency_email", "TINYTEXT"],
                ],
            },
            {
                name: "calendar_dates",
                file: `${dirPath}/calendar_dates.txt`,
                columns: [
                    ["service_id", "TEXT"],
                    ["date", "MEDIUMINT"],
                    ["exception_type", "BIT"],
                ],
            },
            {
                name: "calendar",
                file: `${dirPath}/calendar.txt`,
                columns: [
                    ["service_id", "TEXT"],
                    ["monday", "BOOL"],
                    ["tuesday", "BOOL"],
                    ["wednesday", "BOOL"],
                    ["thursday", "BOOL"],
                    ["friday", "BOOL"],
                    ["saturday", "BOOL"],
                    ["sunday", "BOOL"],
                    ["start_date", "MEDIUMINT"],
                    ["end_date", "MEDIUMINT"],
                ],
            },
            {
                name: "feed_info",
                file: `${dirPath}/feed_info.txt`,
                columns: [
                    ["feed_publisher_name", "TEXT"],
                    ["feed_publisher_url", "TEXT"],
                    ["feed_lang", "TINYTEXT"],
                    ["feed_version", "TEXT"],
                ],
            },
            {
                name: "levels",
                file: `${dirPath}/levels.txt`,
                columns: [
                    ["level_id", "TEXT"],
                    ["level_index", "TINYINT"],
                    ["level_name", "TEXT"],
                ],
            },
            {
                name: "notes",
                file: `${dirPath}/notes.txt`,
                columns: [
                    ["note_id", "TINYTEXT"],
                    ["note_text", "TEXT"],
                ],
            },
            {
                name: "pathways",
                file: `${dirPath}/pathways.txt`,
                columns: [
                    ["pathway_id", "TINYTEXT"],
                    ["from_stop_id", "TINYTEXT"],
                    ["to_stop_id", "TINYTEXT"],
                    ["pathway_mode", "BIT"],
                    ["is_bidirectional", "BOOL"],
                    ["traversal_time", "MEDIUMINT"],
                ],
            },
            {
                name: "routes",
                file: `${dirPath}/routes.txt`,
                columns: [
                    ["route_id", "TINYTEXT"],
                    ["agency_id", "TINYTEXT"],
                    ["route_short_name", "TINYTEXT"],
                    ["route_long_name", "TEXT"],
                    ["route_desc", "TEXT"],
                    ["route_type", "INTEGER"],
                    ["route_color", "TINYTEXT"],
                    ["route_text_color", "TINYTEXT"],
                    ["exact_times", "BOOL"],
                    ["route_url", "TEXT"],
                ],
            },
            {
                name: "shapes",
                file: `${dirPath}/shapes.txt`,
                columns: [
                    ["shape_id", "INTEGER"],
                    ["shape_pt_lat", "FLOAT"],
                    ["shape_pt_lon", "FLOAT"],
                    ["shape_pt_sequence", "MEDIUMINT"],
                    ["shape_dist_traveled", "FLOAT"],
                ],
            },
            {
                name: "stop_times",
                file: `${dirPath}/stop_times.txt`,
                columns: [
                    ["trip_id", "TINYTEXT"],
                    ["arrival_time", "TINYTEXT"],
                    ["departure_time", "TINYTEXT"],
                    ["stop_id", "TINYINT"],
                    ["stop_sequence", "MEDIUMINT"],
                    ["stop_headsign", "BIT"],
                    ["pickup_type", "BOOL"],
                    ["drop_off_type", "BOOL"],
                    ["shape_dist_traveled", "FLOAT"],
                    ["timepoint", "BOOL"],
                    ["stop_note", "TINYTEXT"],
                ],
            },
            {
                name: "stops",
                file: `${dirPath}/stops.txt`,
                columns: [
                    ["stop_id", "TINYTEXT"],
                    ["stop_code", "TINYINT"],
                    ["stop_name", "TEXT"],
                    ["stop_desc", "TINYTEXT"],
                    ["stop_lat", "FLOAT"],
                    ["stop_lon", "FLOAT"],
                    ["location_type", "TINYTEXT"],
                    ["parent_station", "TINYTEXT"],
                    ["wheelchair_boarding", "BIT"],
                    ["level_id", "TINYTEXT"],
                    ["platform_code", "TINYINT"],
                    ["stop_timezone", "TEXT"],
                ],
            },
            {
                name: "trips",
                file: `${dirPath}/trips.txt`,
                columns: [
                    ["route_id", "TINYTEXT"],
                    ["service_id", "TINYTEXT"],
                    ["trip_id", "TINYTEXT"],
                    ["shape_id", "TINYTEXT"],
                    ["trip_headsign", "TINYTEXT"],
                    ["direction_id", "BOOL"],
                    ["block_id", "TINYTEXT"],
                    ["wheelchair_accessible", "BIT"],
                    ["route_direction", "TEXT"],
                    ["trip_note", "TINYTEXT"],
                    ["bikes_allowed", "BOOL"],
                    ["vehicle_category_id", "TINYTEXT"],
                ],
            },
            {
                name: "occupancies",
                file: `${dirPath}/occupancies.txt`,
                columns: [
                    ["trip_id", "TEXT"],
                    ["stop_sequence", "MEDIUMINT"],
                    ["occupancy_status", "TINYINT"],
                    ["monday", "BOOL"],
                    ["tuesday", "BOOL"],
                    ["wednesday", "BOOL"],
                    ["thursday", "BOOL"],
                    ["friday", "BOOL"],
                    ["saturday", "BOOL"],
                    ["sunday", "BOOL"],
                    ["start_date", "MEDIUMINT"],
                    ["end_date", "MEDIUMINT"],
                    ["exception", "BOOL"],
                ],
            },
            {
                name: "vehicle_boardings",
                file: `${dirPath}/vehicle_boardings.txt`,
                columns: [
                    ["vehicle_category_id", "TINYTEXT"],
                    ["child_sequence", "TINYINT"],
                    ["grandchild_sequence", "BOOL"],
                    ["boarding_area_id", "MEDIUMINT"],
                ],
            },
            {
                name: "vehicle_categories",
                file: `${dirPath}/vehicle_categories.txt`,
                columns: [
                    ["vehicle_category_id", "TINYTEXT"],
                    ["vehicle_category_name", "TEXT"],
                ],
            },
            {
                name: "vehicle_couplings",
                file: `${dirPath}/vehicle_couplings.txt`,
                columns: [
                    ["parent_id", "TINYTEXT"],
                    ["child_id", "TINYTEXT"],
                    ["child_sequence", "TINYINT"],
                    ["child_label", "TINYINT"],
                ],
            },
            {
                name: "seats",
                file: `${dirPath}/seats.txt`,
                columns: [],
            },
        ];
    },
    indexes: {
        agency: {
            idx: "idx_agency_id",
            column: "agency_id",
        },
        routes: {
            idx: "idx_route_id",
            column: "route_id",
        },
        notes: {
            idx: "idx_note_id",
            column: "note_id",
        },
        trips: {
            idx: "idx_trip_id",
            column: "trip_id",
        },
        shapes: {
            idx: "idx_shape_id",
            column: "shape_id",
        },
    },
};
